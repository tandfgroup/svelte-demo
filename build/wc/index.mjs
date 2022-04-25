function noop() { }
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    select.selectedIndex = -1; // no option should be selected
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function custom_event(type, detail, bubbles = false) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
}
function attribute_to_object(attributes) {
    const result = {};
    for (const attribute of attributes) {
        result[attribute.name] = attribute.value;
    }
    return result;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
let outros;
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            const { on_mount } = this.$$;
            this.$$.on_disconnect = on_mount.map(run).filter(is_function);
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        disconnectedCallback() {
            run_all(this.$$.on_disconnect);
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    };
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

/* src/web-components/Crud/CrudButtons.svelte generated by Svelte v3.47.0 */

function add_css(target) {
	append_styles(target, "svelte-1adx1q8", ".buttons.svelte-1adx1q8.svelte-1adx1q8{display:flex;justify-content:center;color:red}.buttons.svelte-1adx1q8>button.svelte-1adx1q8{color:red;margin-right:var(--horizontal-gap, 0em)}.buttons.svelte-1adx1q8>button.svelte-1adx1q8:last-child{color:var(--buttons-clr, none);margin-right:0em}");
}

function create_fragment$1(ctx) {
	let div;
	let button0;
	let t0;
	let button0_disabled_value;
	let t1;
	let button1;
	let t2;
	let button1_disabled_value;
	let t3;
	let button2;
	let t4;
	let button2_disabled_value;
	let t5;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			div = element("div");
			button0 = element("button");
			t0 = text("create");
			t1 = space();
			button1 = element("button");
			t2 = text("update");
			t3 = space();
			button2 = element("button");
			t4 = text("delete");
			t5 = space();
			if (default_slot) default_slot.c();
			button0.disabled = button0_disabled_value = !/*first*/ ctx[0] || !/*last*/ ctx[1];
			attr(button0, "class", "svelte-1adx1q8");
			button1.disabled = button1_disabled_value = !/*first*/ ctx[0] || !/*last*/ ctx[1] || !/*selected*/ ctx[2];
			attr(button1, "class", "svelte-1adx1q8");
			button2.disabled = button2_disabled_value = !/*selected*/ ctx[2];
			attr(button2, "class", "svelte-1adx1q8");
			attr(div, "class", "buttons svelte-1adx1q8");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, button0);
			append(button0, t0);
			append(div, t1);
			append(div, button1);
			append(button1, t2);
			append(div, t3);
			append(div, button2);
			append(button2, t4);
			/*div_binding*/ ctx[10](div);
			insert(target, t5, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*click_handler*/ ctx[7]),
					listen(button1, "click", /*click_handler_1*/ ctx[8]),
					listen(button2, "click", /*click_handler_2*/ ctx[9])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*first, last*/ 3 && button0_disabled_value !== (button0_disabled_value = !/*first*/ ctx[0] || !/*last*/ ctx[1])) {
				button0.disabled = button0_disabled_value;
			}

			if (!current || dirty & /*first, last, selected*/ 7 && button1_disabled_value !== (button1_disabled_value = !/*first*/ ctx[0] || !/*last*/ ctx[1] || !/*selected*/ ctx[2])) {
				button1.disabled = button1_disabled_value;
			}

			if (!current || dirty & /*selected*/ 4 && button2_disabled_value !== (button2_disabled_value = !/*selected*/ ctx[2])) {
				button2.disabled = button2_disabled_value;
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			/*div_binding*/ ctx[10](null);
			if (detaching) detach(t5);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { first } = $$props;
	let { last } = $$props;
	let { selected } = $$props;
	const dispatch = createEventDispatcher();
	let el;

	function buttonClicked(type) {
		dispatch("buttonClicked", type);
	}

	onMount(() => {
		fetch("https://reqres.in/api/products/3").then(async data => {
			console.log(await data.json());
		}).catch(error => {
			console.log(error);
		});
	});

	const click_handler = e => buttonClicked("create");
	const click_handler_1 = e => buttonClicked("update");
	const click_handler_2 = e => buttonClicked("delete");

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(3, el);
		});
	}

	$$self.$$set = $$props => {
		if ('first' in $$props) $$invalidate(0, first = $$props.first);
		if ('last' in $$props) $$invalidate(1, last = $$props.last);
		if ('selected' in $$props) $$invalidate(2, selected = $$props.selected);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		first,
		last,
		selected,
		el,
		buttonClicked,
		$$scope,
		slots,
		click_handler,
		click_handler_1,
		click_handler_2,
		div_binding
	];
}

class CrudButtons extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { first: 0, last: 1, selected: 2 }, add_css);
	}
}

/* src/web-components/Crud/index.wc.svelte generated by Svelte v3.47.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (76:4) {#each filteredPeople as person, i}
function create_each_block(ctx) {
	let option;
	let t0_value = /*person*/ ctx[17].last + "";
	let t0;
	let t1;
	let t2_value = /*person*/ ctx[17].first + "";
	let t2;
	let option_value_value;

	return {
		c() {
			option = element("option");
			t0 = text(t0_value);
			t1 = text(", ");
			t2 = text(t2_value);
			option.__value = option_value_value = /*i*/ ctx[3];
			option.value = option.__value;
		},
		m(target, anchor) {
			insert(target, option, anchor);
			append(option, t0);
			append(option, t1);
			append(option, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*filteredPeople*/ 2 && t0_value !== (t0_value = /*person*/ ctx[17].last + "")) set_data(t0, t0_value);
			if (dirty & /*filteredPeople*/ 2 && t2_value !== (t2_value = /*person*/ ctx[17].first + "")) set_data(t2, t2_value);
		},
		d(detaching) {
			if (detaching) detach(option);
		}
	};
}

// (87:1) <CrudButtons on:buttonClicked={e => buttonClicked(e.detail)} first={first}  last={last} selected={selected}>
function create_default_slot(ctx) {
	let style;

	return {
		c() {
			style = element("style");
			style.textContent = "button {\n\t\t\t\t/* font-size: xx-small; */\n\t\t\t}";
		},
		m(target, anchor) {
			insert(target, style, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(style);
		}
	};
}

function create_fragment(ctx) {
	let div3;
	let slot;
	let t0;
	let div2;
	let div0;
	let input0;
	let t1;
	let select;
	let t2;
	let div1;
	let label0;
	let input1;
	let t3;
	let label1;
	let input2;
	let t4;
	let crudbuttons;
	let current;
	let mounted;
	let dispose;
	let each_value = /*filteredPeople*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	crudbuttons = new CrudButtons({
			props: {
				first: /*first*/ ctx[4],
				last: /*last*/ ctx[5],
				selected: /*selected*/ ctx[2],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	crudbuttons.$on("buttonClicked", /*buttonClicked_handler*/ ctx[12]);

	return {
		c() {
			div3 = element("div");
			slot = element("slot");
			t0 = space();
			div2 = element("div");
			div0 = element("div");
			input0 = element("input");
			t1 = space();
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			div1 = element("div");
			label0 = element("label");
			input1 = element("input");
			t3 = space();
			label1 = element("label");
			input2 = element("input");
			t4 = space();
			create_component(crudbuttons.$$.fragment);
			this.c = noop;
			attr(input0, "placeholder", "filter prefix");
			attr(select, "size", 5);
			if (/*i*/ ctx[3] === void 0) add_render_callback(() => /*select_change_handler*/ ctx[9].call(select));
			attr(div0, "class", "select-items");
			attr(input1, "placeholder", "first");
			attr(input2, "placeholder", "last");
			attr(div2, "class", "actions");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, slot);
			append(div3, t0);
			append(div3, div2);
			append(div2, div0);
			append(div0, input0);
			set_input_value(input0, /*prefix*/ ctx[0]);
			append(div0, t1);
			append(div0, select);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_option(select, /*i*/ ctx[3]);
			append(div2, t2);
			append(div2, div1);
			append(div1, label0);
			append(label0, input1);
			set_input_value(input1, /*first*/ ctx[4]);
			append(div1, t3);
			append(div1, label1);
			append(label1, input2);
			set_input_value(input2, /*last*/ ctx[5]);
			append(div3, t4);
			mount_component(crudbuttons, div3, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[8]),
					listen(select, "change", /*select_change_handler*/ ctx[9]),
					listen(input1, "input", /*input1_input_handler*/ ctx[10]),
					listen(input2, "input", /*input2_input_handler*/ ctx[11])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*prefix*/ 1 && input0.value !== /*prefix*/ ctx[0]) {
				set_input_value(input0, /*prefix*/ ctx[0]);
			}

			if (dirty & /*filteredPeople*/ 2) {
				each_value = /*filteredPeople*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*i*/ 8) {
				select_option(select, /*i*/ ctx[3]);
			}

			if (dirty & /*first*/ 16 && input1.value !== /*first*/ ctx[4]) {
				set_input_value(input1, /*first*/ ctx[4]);
			}

			if (dirty & /*last*/ 32 && input2.value !== /*last*/ ctx[5]) {
				set_input_value(input2, /*last*/ ctx[5]);
			}

			const crudbuttons_changes = {};
			if (dirty & /*first*/ 16) crudbuttons_changes.first = /*first*/ ctx[4];
			if (dirty & /*last*/ 32) crudbuttons_changes.last = /*last*/ ctx[5];
			if (dirty & /*selected*/ 4) crudbuttons_changes.selected = /*selected*/ ctx[2];

			if (dirty & /*$$scope*/ 524288) {
				crudbuttons_changes.$$scope = { dirty, ctx };
			}

			crudbuttons.$set(crudbuttons_changes);
		},
		i(local) {
			if (current) return;
			transition_in(crudbuttons.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(crudbuttons.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div3);
			destroy_each(each_blocks, detaching);
			destroy_component(crudbuttons);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let filteredPeople;
	let selected;

	let people = [
		{ first: 'Hans', last: 'Emil' },
		{ first: 'Max', last: 'Mustermann' },
		{ first: 'Roman', last: 'Tisch' }
	];

	let prefix = '';
	let first = '';
	let last = '';
	let i = 0;

	function create() {
		$$invalidate(7, people = people.concat({ first, last }));
		$$invalidate(3, i = people.length - 1);
		$$invalidate(4, first = $$invalidate(5, last = ''));
	}

	function update() {
		$$invalidate(2, selected.first = first, selected);
		$$invalidate(2, selected.last = last, selected);
		$$invalidate(7, people);
	}

	const buttonClicked = type => {
		switch (type) {
			case "create":
				create();
				break;
			case "update":
				update();
				break;
			case "delete":
				remove();
				break;
		}
	};

	function remove() {
		// Remove selected person from the source array (people), not the filtered array
		const index = people.indexOf(selected);

		$$invalidate(7, people = [...people.slice(0, index), ...people.slice(index + 1)]);
		$$invalidate(4, first = $$invalidate(5, last = ''));
		$$invalidate(3, i = Math.min(i, filteredPeople.length - 2));
	}

	function reset_inputs(person) {
		$$invalidate(4, first = person ? person.first : '');
		$$invalidate(5, last = person ? person.last : '');
	}

	function input0_input_handler() {
		prefix = this.value;
		$$invalidate(0, prefix);
	}

	function select_change_handler() {
		i = select_value(this);
		$$invalidate(3, i);
	}

	function input1_input_handler() {
		first = this.value;
		$$invalidate(4, first);
	}

	function input2_input_handler() {
		last = this.value;
		$$invalidate(5, last);
	}

	const buttonClicked_handler = e => buttonClicked(e.detail);

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*prefix, people*/ 129) {
			$$invalidate(1, filteredPeople = prefix
			? people.filter(person => {
					const name = `${person.last}, ${person.first}`;
					return name.toLowerCase().startsWith(prefix.toLowerCase());
				})
			: people);
		}

		if ($$self.$$.dirty & /*filteredPeople, i*/ 10) {
			$$invalidate(2, selected = filteredPeople[i]);
		}

		if ($$self.$$.dirty & /*selected*/ 4) {
			reset_inputs(selected);
		}
	};

	return [
		prefix,
		filteredPeople,
		selected,
		i,
		first,
		last,
		buttonClicked,
		people,
		input0_input_handler,
		select_change_handler,
		input1_input_handler,
		input2_input_handler,
		buttonClicked_handler
	];
}

class Crud extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>:host{display:flex;flex-direction:column;align-items:center}.actions{display:flex;flex-direction:row;justify-content:center;margin-bottom:var(--vertical-gap, 0.5em)}.select-items{display:flex;flex-direction:column;margin-right:var(--horizontal-gap, 0.5em)}*{font-family:inherit;font-size:inherit}</style>`;

		init(
			this,
			{
				target: this.shadowRoot,
				props: attribute_to_object(this.attributes),
				customElement: true
			},
			instance,
			create_fragment,
			safe_not_equal,
			{},
			null
		);

		if (options) {
			if (options.target) {
				insert(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("crud-element", Crud);

export { Crud, CrudButtons };
