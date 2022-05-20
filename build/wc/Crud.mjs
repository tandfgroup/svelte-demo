import { Button, Container, Row, Col, FormGroup, Label, Input } from 'sveltestrap';

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
function empty() {
    return text('');
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
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
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
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
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

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
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

function create_default_slot_2$1(ctx) {
	let t;

	return {
		c() {
			t = text("create");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (25:1) <Button color="primary" on:click={e => buttonClicked("update")} disabled="{!first || !last || !selected}">
function create_default_slot_1$1(ctx) {
	let t;

	return {
		c() {
			t = text("update");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (26:1) <Button color="primary" on:click={e => buttonClicked("delete")} disabled="{!selected}">
function create_default_slot$1(ctx) {
	let t;

	return {
		c() {
			t = text("delete");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

function create_fragment$1(ctx) {
	let div;
	let button0;
	let t0;
	let button1;
	let t1;
	let button2;
	let t2;
	let current;

	button0 = new Button({
			props: {
				color: "primary",
				disabled: !/*first*/ ctx[0] || !/*last*/ ctx[1],
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			}
		});

	button0.$on("click", /*click_handler*/ ctx[6]);

	button1 = new Button({
			props: {
				color: "primary",
				disabled: !/*first*/ ctx[0] || !/*last*/ ctx[1] || !/*selected*/ ctx[2],
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			}
		});

	button1.$on("click", /*click_handler_1*/ ctx[7]);

	button2 = new Button({
			props: {
				color: "primary",
				disabled: !/*selected*/ ctx[2],
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			}
		});

	button2.$on("click", /*click_handler_2*/ ctx[8]);
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			div = element("div");
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
			t2 = space();
			if (default_slot) default_slot.c();
			attr(div, "class", "text-center");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(button0, div, null);
			append(div, t0);
			mount_component(button1, div, null);
			append(div, t1);
			mount_component(button2, div, null);
			/*div_binding*/ ctx[9](div);
			insert(target, t2, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			const button0_changes = {};
			if (dirty & /*first, last*/ 3) button0_changes.disabled = !/*first*/ ctx[0] || !/*last*/ ctx[1];

			if (dirty & /*$$scope*/ 1024) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};
			if (dirty & /*first, last, selected*/ 7) button1_changes.disabled = !/*first*/ ctx[0] || !/*last*/ ctx[1] || !/*selected*/ ctx[2];

			if (dirty & /*$$scope*/ 1024) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};
			if (dirty & /*selected*/ 4) button2_changes.disabled = !/*selected*/ ctx[2];

			if (dirty & /*$$scope*/ 1024) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(button0);
			destroy_component(button1);
			destroy_component(button2);
			/*div_binding*/ ctx[9](null);
			if (detaching) detach(t2);
			if (default_slot) default_slot.d(detaching);
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
		if ('$$scope' in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	return [
		first,
		last,
		selected,
		el,
		buttonClicked,
		slots,
		click_handler,
		click_handler_1,
		click_handler_2,
		div_binding,
		$$scope
	];
}

class CrudButtons extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { first: 0, last: 1, selected: 2 });
	}
}

/* src/web-components/Crud/index.wc.svelte generated by Svelte v3.47.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	child_ctx[6] = i;
	return child_ctx;
}

// (74:2) <Col>
function create_default_slot_18(ctx) {
	let h3;

	return {
		c() {
			h3 = element("h3");
			h3.innerHTML = `<slot></slot>`;
			attr(h3, "class", "heading text-center");
		},
		m(target, anchor) {
			insert(target, h3, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(h3);
		}
	};
}

// (73:1) <Row>
function create_default_slot_17(ctx) {
	let col;
	let current;

	col = new Col({
			props: {
				$$slots: { default: [create_default_slot_18] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(col.$$.fragment);
		},
		m(target, anchor) {
			mount_component(col, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const col_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				col_changes.$$scope = { dirty, ctx };
			}

			col.$set(col_changes);
		},
		i(local) {
			if (current) return;
			transition_in(col.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(col.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(col, detaching);
		}
	};
}

// (83:4) <Label for="filterprefix">
function create_default_slot_16(ctx) {
	let t;

	return {
		c() {
			t = text("Filter Prefix");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (82:3) <FormGroup>
function create_default_slot_15(ctx) {
	let label;
	let t;
	let input;
	let updating_value;
	let current;

	label = new Label({
			props: {
				for: "filterprefix",
				$$slots: { default: [create_default_slot_16] },
				$$scope: { ctx }
			}
		});

	function input_value_binding(value) {
		/*input_value_binding*/ ctx[9](value);
	}

	let input_props = {
		id: "filterprefix",
		placeholder: "filter prefix"
	};

	if (/*prefix*/ ctx[1] !== void 0) {
		input_props.value = /*prefix*/ ctx[1];
	}

	input = new Input({ props: input_props });
	binding_callbacks.push(() => bind(input, 'value', input_value_binding));

	return {
		c() {
			create_component(label.$$.fragment);
			t = space();
			create_component(input.$$.fragment);
		},
		m(target, anchor) {
			mount_component(label, target, anchor);
			insert(target, t, anchor);
			mount_component(input, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const input_changes = {};

			if (!updating_value && dirty & /*prefix*/ 2) {
				updating_value = true;
				input_changes.value = /*prefix*/ ctx[1];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(label.$$.fragment, local);
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach(t);
			destroy_component(input, detaching);
		}
	};
}

// (81:2) <Col>
function create_default_slot_14(ctx) {
	let formgroup;
	let current;

	formgroup = new FormGroup({
			props: {
				$$slots: { default: [create_default_slot_15] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(formgroup.$$.fragment);
		},
		m(target, anchor) {
			mount_component(formgroup, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const formgroup_changes = {};

			if (dirty & /*$$scope, prefix*/ 1048578) {
				formgroup_changes.$$scope = { dirty, ctx };
			}

			formgroup.$set(formgroup_changes);
		},
		i(local) {
			if (current) return;
			transition_in(formgroup.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(formgroup.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(formgroup, detaching);
		}
	};
}

// (91:4) <Label for="first">
function create_default_slot_13(ctx) {
	let t;

	return {
		c() {
			t = text("First Name");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (90:3) <FormGroup>
function create_default_slot_12(ctx) {
	let label;
	let t;
	let input;
	let updating_value;
	let current;

	label = new Label({
			props: {
				for: "first",
				$$slots: { default: [create_default_slot_13] },
				$$scope: { ctx }
			}
		});

	function input_value_binding_1(value) {
		/*input_value_binding_1*/ ctx[10](value);
	}

	let input_props = { id: "first" };

	if (/*first*/ ctx[4] !== void 0) {
		input_props.value = /*first*/ ctx[4];
	}

	input = new Input({ props: input_props });
	binding_callbacks.push(() => bind(input, 'value', input_value_binding_1));

	return {
		c() {
			create_component(label.$$.fragment);
			t = space();
			create_component(input.$$.fragment);
		},
		m(target, anchor) {
			mount_component(label, target, anchor);
			insert(target, t, anchor);
			mount_component(input, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const input_changes = {};

			if (!updating_value && dirty & /*first*/ 16) {
				updating_value = true;
				input_changes.value = /*first*/ ctx[4];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(label.$$.fragment, local);
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach(t);
			destroy_component(input, detaching);
		}
	};
}

// (89:2) <Col>
function create_default_slot_11(ctx) {
	let formgroup;
	let current;

	formgroup = new FormGroup({
			props: {
				$$slots: { default: [create_default_slot_12] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(formgroup.$$.fragment);
		},
		m(target, anchor) {
			mount_component(formgroup, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const formgroup_changes = {};

			if (dirty & /*$$scope, first*/ 1048592) {
				formgroup_changes.$$scope = { dirty, ctx };
			}

			formgroup.$set(formgroup_changes);
		},
		i(local) {
			if (current) return;
			transition_in(formgroup.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(formgroup.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(formgroup, detaching);
		}
	};
}

// (99:4) <Label for="Last Name">
function create_default_slot_10(ctx) {
	let t;

	return {
		c() {
			t = text("Last Name");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (98:3) <FormGroup>
function create_default_slot_9(ctx) {
	let label;
	let t;
	let input;
	let updating_value;
	let current;

	label = new Label({
			props: {
				for: "Last Name",
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			}
		});

	function input_value_binding_2(value) {
		/*input_value_binding_2*/ ctx[11](value);
	}

	let input_props = { id: "Last Name" };

	if (/*last*/ ctx[5] !== void 0) {
		input_props.value = /*last*/ ctx[5];
	}

	input = new Input({ props: input_props });
	binding_callbacks.push(() => bind(input, 'value', input_value_binding_2));

	return {
		c() {
			create_component(label.$$.fragment);
			t = space();
			create_component(input.$$.fragment);
		},
		m(target, anchor) {
			mount_component(label, target, anchor);
			insert(target, t, anchor);
			mount_component(input, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const input_changes = {};

			if (!updating_value && dirty & /*last*/ 32) {
				updating_value = true;
				input_changes.value = /*last*/ ctx[5];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(label.$$.fragment, local);
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach(t);
			destroy_component(input, detaching);
		}
	};
}

// (97:2) <Col>
function create_default_slot_8(ctx) {
	let formgroup;
	let current;

	formgroup = new FormGroup({
			props: {
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(formgroup.$$.fragment);
		},
		m(target, anchor) {
			mount_component(formgroup, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const formgroup_changes = {};

			if (dirty & /*$$scope, last*/ 1048608) {
				formgroup_changes.$$scope = { dirty, ctx };
			}

			formgroup.$set(formgroup_changes);
		},
		i(local) {
			if (current) return;
			transition_in(formgroup.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(formgroup.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(formgroup, detaching);
		}
	};
}

// (80:1) <Row>
function create_default_slot_7(ctx) {
	let col0;
	let t0;
	let col1;
	let t1;
	let col2;
	let current;

	col0 = new Col({
			props: {
				$$slots: { default: [create_default_slot_14] },
				$$scope: { ctx }
			}
		});

	col1 = new Col({
			props: {
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			}
		});

	col2 = new Col({
			props: {
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(col0.$$.fragment);
			t0 = space();
			create_component(col1.$$.fragment);
			t1 = space();
			create_component(col2.$$.fragment);
		},
		m(target, anchor) {
			mount_component(col0, target, anchor);
			insert(target, t0, anchor);
			mount_component(col1, target, anchor);
			insert(target, t1, anchor);
			mount_component(col2, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const col0_changes = {};

			if (dirty & /*$$scope, prefix*/ 1048578) {
				col0_changes.$$scope = { dirty, ctx };
			}

			col0.$set(col0_changes);
			const col1_changes = {};

			if (dirty & /*$$scope, first*/ 1048592) {
				col1_changes.$$scope = { dirty, ctx };
			}

			col1.$set(col1_changes);
			const col2_changes = {};

			if (dirty & /*$$scope, last*/ 1048608) {
				col2_changes.$$scope = { dirty, ctx };
			}

			col2.$set(col2_changes);
		},
		i(local) {
			if (current) return;
			transition_in(col0.$$.fragment, local);
			transition_in(col1.$$.fragment, local);
			transition_in(col2.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(col0.$$.fragment, local);
			transition_out(col1.$$.fragment, local);
			transition_out(col2.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(col0, detaching);
			if (detaching) detach(t0);
			destroy_component(col1, detaching);
			if (detaching) detach(t1);
			destroy_component(col2, detaching);
		}
	};
}

// (109:4) {#each filteredPeople as person, i}
function create_each_block(ctx) {
	let input;
	let updating_group;
	let current;

	function input_group_binding(value) {
		/*input_group_binding*/ ctx[12](value);
	}

	let input_props = {
		id: /*i*/ ctx[6],
		type: "radio",
		value: /*i*/ ctx[6],
		label: `${/*person*/ ctx[18].last}, ${/*person*/ ctx[18].first}`
	};

	if (/*radioGroup*/ ctx[0] !== void 0) {
		input_props.group = /*radioGroup*/ ctx[0];
	}

	input = new Input({ props: input_props });
	binding_callbacks.push(() => bind(input, 'group', input_group_binding));

	return {
		c() {
			create_component(input.$$.fragment);
		},
		m(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const input_changes = {};
			if (dirty & /*filteredPeople*/ 4) input_changes.label = `${/*person*/ ctx[18].last}, ${/*person*/ ctx[18].first}`;

			if (!updating_group && dirty & /*radioGroup*/ 1) {
				updating_group = true;
				input_changes.group = /*radioGroup*/ ctx[0];
				add_flush_callback(() => updating_group = false);
			}

			input.$set(input_changes);
		},
		i(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(input, detaching);
		}
	};
}

// (108:3) <FormGroup>
function create_default_slot_6(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*filteredPeople*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*filteredPeople, radioGroup*/ 5) {
				each_value = /*filteredPeople*/ ctx[2];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (107:2) <Col>
function create_default_slot_5(ctx) {
	let formgroup;
	let current;

	formgroup = new FormGroup({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(formgroup.$$.fragment);
		},
		m(target, anchor) {
			mount_component(formgroup, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const formgroup_changes = {};

			if (dirty & /*$$scope, filteredPeople, radioGroup*/ 1048581) {
				formgroup_changes.$$scope = { dirty, ctx };
			}

			formgroup.$set(formgroup_changes);
		},
		i(local) {
			if (current) return;
			transition_in(formgroup.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(formgroup.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(formgroup, detaching);
		}
	};
}

// (106:1) <Row>
function create_default_slot_4(ctx) {
	let col;
	let current;

	col = new Col({
			props: {
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(col.$$.fragment);
		},
		m(target, anchor) {
			mount_component(col, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const col_changes = {};

			if (dirty & /*$$scope, filteredPeople, radioGroup*/ 1048581) {
				col_changes.$$scope = { dirty, ctx };
			}

			col.$set(col_changes);
		},
		i(local) {
			if (current) return;
			transition_in(col.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(col.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(col, detaching);
		}
	};
}

// (123:3) <CrudButtons on:buttonClicked={e => buttonClicked(e.detail)} first={first}  last={last} selected={selected}>
function create_default_slot_3(ctx) {
	let style;

	return {
		c() {
			style = element("style");
			style.textContent = "button {\n\t\t\t\t\t\t/* font-size: xx-small; */\n\t\t\t\t\t}";
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

// (122:2) <Col>
function create_default_slot_2(ctx) {
	let crudbuttons;
	let current;

	crudbuttons = new CrudButtons({
			props: {
				first: /*first*/ ctx[4],
				last: /*last*/ ctx[5],
				selected: /*selected*/ ctx[3],
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	crudbuttons.$on("buttonClicked", /*buttonClicked_handler*/ ctx[13]);

	return {
		c() {
			create_component(crudbuttons.$$.fragment);
		},
		m(target, anchor) {
			mount_component(crudbuttons, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const crudbuttons_changes = {};
			if (dirty & /*first*/ 16) crudbuttons_changes.first = /*first*/ ctx[4];
			if (dirty & /*last*/ 32) crudbuttons_changes.last = /*last*/ ctx[5];
			if (dirty & /*selected*/ 8) crudbuttons_changes.selected = /*selected*/ ctx[3];

			if (dirty & /*$$scope*/ 1048576) {
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
			destroy_component(crudbuttons, detaching);
		}
	};
}

// (121:1) <Row>
function create_default_slot_1(ctx) {
	let col;
	let current;

	col = new Col({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(col.$$.fragment);
		},
		m(target, anchor) {
			mount_component(col, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const col_changes = {};

			if (dirty & /*$$scope, first, last, selected*/ 1048632) {
				col_changes.$$scope = { dirty, ctx };
			}

			col.$set(col_changes);
		},
		i(local) {
			if (current) return;
			transition_in(col.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(col.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(col, detaching);
		}
	};
}

// (72:0) <Container>
function create_default_slot(ctx) {
	let row0;
	let t0;
	let row1;
	let t1;
	let row2;
	let t2;
	let row3;
	let current;

	row0 = new Row({
			props: {
				$$slots: { default: [create_default_slot_17] },
				$$scope: { ctx }
			}
		});

	row1 = new Row({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			}
		});

	row2 = new Row({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	row3 = new Row({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(row0.$$.fragment);
			t0 = space();
			create_component(row1.$$.fragment);
			t1 = space();
			create_component(row2.$$.fragment);
			t2 = space();
			create_component(row3.$$.fragment);
		},
		m(target, anchor) {
			mount_component(row0, target, anchor);
			insert(target, t0, anchor);
			mount_component(row1, target, anchor);
			insert(target, t1, anchor);
			mount_component(row2, target, anchor);
			insert(target, t2, anchor);
			mount_component(row3, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const row0_changes = {};

			if (dirty & /*$$scope*/ 1048576) {
				row0_changes.$$scope = { dirty, ctx };
			}

			row0.$set(row0_changes);
			const row1_changes = {};

			if (dirty & /*$$scope, last, first, prefix*/ 1048626) {
				row1_changes.$$scope = { dirty, ctx };
			}

			row1.$set(row1_changes);
			const row2_changes = {};

			if (dirty & /*$$scope, filteredPeople, radioGroup*/ 1048581) {
				row2_changes.$$scope = { dirty, ctx };
			}

			row2.$set(row2_changes);
			const row3_changes = {};

			if (dirty & /*$$scope, first, last, selected*/ 1048632) {
				row3_changes.$$scope = { dirty, ctx };
			}

			row3.$set(row3_changes);
		},
		i(local) {
			if (current) return;
			transition_in(row0.$$.fragment, local);
			transition_in(row1.$$.fragment, local);
			transition_in(row2.$$.fragment, local);
			transition_in(row3.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(row0.$$.fragment, local);
			transition_out(row1.$$.fragment, local);
			transition_out(row2.$$.fragment, local);
			transition_out(row3.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(row0, detaching);
			if (detaching) detach(t0);
			destroy_component(row1, detaching);
			if (detaching) detach(t1);
			destroy_component(row2, detaching);
			if (detaching) detach(t2);
			destroy_component(row3, detaching);
		}
	};
}

function create_fragment(ctx) {
	let container;
	let current;

	container = new Container({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(container.$$.fragment);
			this.c = noop;
		},
		m(target, anchor) {
			mount_component(container, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const container_changes = {};

			if (dirty & /*$$scope, first, last, selected, filteredPeople, radioGroup, prefix*/ 1048639) {
				container_changes.$$scope = { dirty, ctx };
			}

			container.$set(container_changes);
		},
		i(local) {
			if (current) return;
			transition_in(container.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(container.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(container, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let filteredPeople;
	let selected;
	let radioGroup = 0;

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
		$$invalidate(8, people = people.concat({ first, last }));
		$$invalidate(6, i = people.length - 1);
		$$invalidate(4, first = $$invalidate(5, last = ''));
	}

	function update() {
		$$invalidate(3, selected.first = first, selected);
		$$invalidate(3, selected.last = last, selected);
		$$invalidate(8, people);
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

		$$invalidate(8, people = [...people.slice(0, index), ...people.slice(index + 1)]);
		$$invalidate(4, first = $$invalidate(5, last = ''));
		$$invalidate(6, i = Math.min(i, filteredPeople.length - 2));
	}

	function reset_inputs(person) {
		$$invalidate(4, first = person ? person.first : '');
		$$invalidate(5, last = person ? person.last : '');
	}

	function input_value_binding(value) {
		prefix = value;
		$$invalidate(1, prefix);
	}

	function input_value_binding_1(value) {
		first = value;
		$$invalidate(4, first);
	}

	function input_value_binding_2(value) {
		last = value;
		$$invalidate(5, last);
	}

	function input_group_binding(value) {
		radioGroup = value;
		$$invalidate(0, radioGroup);
	}

	const buttonClicked_handler = e => buttonClicked(e.detail);

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*radioGroup*/ 1) {
			{
				console.log(radioGroup);
			}
		}

		if ($$self.$$.dirty & /*prefix, people*/ 258) {
			$$invalidate(2, filteredPeople = prefix
			? people.filter(person => {
					const name = `${person.last}, ${person.first}`;
					return name.toLowerCase().indexOf(prefix.toLowerCase()) > -1;
				})
			: people);
		}

		if ($$self.$$.dirty & /*filteredPeople, radioGroup*/ 5) {
			$$invalidate(3, selected = filteredPeople[radioGroup]);
		}

		if ($$self.$$.dirty & /*selected*/ 8) {
			reset_inputs(selected);
		}
	};

	return [
		radioGroup,
		prefix,
		filteredPeople,
		selected,
		first,
		last,
		i,
		buttonClicked,
		people,
		input_value_binding,
		input_value_binding_1,
		input_value_binding_2,
		input_group_binding,
		buttonClicked_handler
	];
}

class Crud extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";:host{display:flex;flex-direction:column;align-items:center}.heading{color:blueviolet}</style>`;

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
