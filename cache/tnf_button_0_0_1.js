import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./button.html";
import { registerCustomComponent } from 'shared/utils';
import './Crud.js';
import "@lwc/synthetic-shadow";

class Button extends LightningElement {
  constructor(...args) {
    super(...args);
    this.label = "Submit";
  }

  onClick() {
    alert(`${this.label} button clicked`);
  }

  renderedCallback() {
    const svelteCustomComp = this.template.querySelector("[data-id=svelte-custom-component]");
    console.log(svelteCustomComp);
    svelteCustomComp.appendChild(document.createElement("crud-element"));
  }
  /*LWC compiler v2.13.3*/


}

_registerDecorators(Button, {
  publicProps: {
    label: {
      config: 0
    }
  }
});

export default _registerComponent(Button, {
  tmpl: _tmpl
}); // Don't use the same name as tnf-button. It will break the functionality during composition

registerCustomComponent('tnf-button-ce', Button.CustomElementConstructor);