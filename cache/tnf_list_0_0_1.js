import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./list.html";
import { registerCustomComponent } from 'shared/utils';

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

_registerDecorators(List, {
  fields: ["message"]
});

export default _registerComponent(List, {
  tmpl: _tmpl
}); // Don't use the same name as tnf-list. It will break the functionality during composition

registerCustomComponent('tnf-list-ce', List.CustomElementConstructor);