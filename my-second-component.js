import { LitElement, html, css } from 'lit-element';

class MySecondComponent extends LitElement {
  static get properties() {
    return {
      prop2: { type: String },
      prop3: { type: Number }
    }
  }
  render() {
    return html`
        <h2 > ${this.prop2}</h2>
        <button @click="${this.eventPushMe}" > Presioname </button>
        `;
  }
  eventPushMe() {
    this.prop3++;
    this.dispatchEvent(new CustomEvent('someone-push-me',
      {
        detail: {
          bubbles: true, 
          el: this
        }
      }
    ));
  }
  constructor() {
    super();
    this.prop3 = 0;
  }
  static get styles() {
    return css`
          :host{
              display: block;
              background-color: #80FFAC;
              padding: 8px;
          }
          button{
            border: 0;
            background-color: #74E8BE;
            width: 100px;
            height: 40px;
            color: #fff;
            font-size: 16px;
          }
          button:hover{
            background-color: #8CFFF5;
            color: #FF8280;
          }
        `;
  }
}
customElements.define('my-second-component', MySecondComponent)