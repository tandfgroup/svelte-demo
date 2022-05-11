import _implicitStylesheets from "./button.css";

import _implicitScopedStylesheets from "./button.scoped.css?scoped=true";

import _tnfList from "tnf/list";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 1
};
const stc1 = {
  attrs: {
    "data-id": "svelte-custom-component"
  },
  context: {
    lwc: {
      dom: "manual"
    }
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element} = $api;
  const {_m0} = $ctx;
  return [api_element("button", {
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.onClick))
    }
  }, [api_text(api_dynamic_text($cmp.label))]), api_custom_element("tnf-list", _tnfList, stc0), api_element("div", stc1)];
  /*LWC compiler v2.13.3*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "tnf-button_button"
}
