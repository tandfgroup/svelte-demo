import { registerTemplate, registerDecorators, registerComponent, LightningElement } from 'lwc';

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  return "main" + shadowSelector + " {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1" + shadowSelector + " {color: #1798c1;}";
  /*LWC compiler v2.13.3*/
}
var _implicitStylesheets = [stylesheet];

var _implicitScopedStylesheets = undefined;

const stc0 = {
  key: 0
};
const stc1 = {
  key: 1
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, b: api_bind} = $api;
  const {_m0} = $ctx;
  return [api_element("main", stc0, [api_element("h1", stc1, [api_text(api_dynamic_text($cmp.message))]), api_element("input", {
    props: {
      "value": $cmp.message
    },
    key: 2,
    on: {
      "input": _m0 || ($ctx._m0 = api_bind($cmp.handleInput))
    }
  })])];
  /*LWC compiler v2.13.3*/
}
var _tmpl = registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "tnf-list_list";
}

const registerCustomComponent = (name, ctor) => {
  if (!customElements.get(name)) {
    customElements.define(name, ctor);
  }
};

class List extends LightningElement {
  constructor(...args) {
    super(...args);
    this.message = "Hello World";
  }

  handleInput(event) {
    this.message = event.target.value;
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(List, {
  fields: ["message"]
});

var list = registerComponent(List, {
  tmpl: _tmpl
}); // Don't use the same name as tnf-list. It will break the functionality during composition

registerCustomComponent('tnf-list-ce', List.CustomElementConstructor);

export { list as default };
