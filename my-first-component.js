import { LitElement, html, css } from 'lit-element';

import './my-second-component'

class MyFirstComponent extends LitElement {
  static get properties() {
    return {
      prop1: { type: String },
      prop4: { type: Number }
    }
  }
  render() {
    return html`
          <h1> ${this.prop1} </h1>
          <div> contador:${this.prop4}<div/>
          <my-second-component 
          prop2="Second component" 
          @someone-push-me="${this.someonePush}"
          ></my-second-component>
        `;
  }
  someonePush(event) {
    this.prop4 = (event.detail.el.prop3);
  }
  static get styles() {
    return css`
        :host{
            display: block;
            padding: 8px;
            background-color: #80C6FF;
        }
        `
  }

}

customElements.define('my-first-component', MyFirstComponent);