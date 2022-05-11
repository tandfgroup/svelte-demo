import _implicitStylesheets from "./list.css";

import _implicitScopedStylesheets from "./list.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
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
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "tnf-list_list"
}
