import { LitElement, html, css } from 'lit-element';

class ChildComponent extends LitElement{
    static get properties(){
        return {
          childMessage2:{ type: String},
          childMessage3:{ type: String},
          propBtnColor:{ type: String}
        }
    }

    render(){
        return html`
        <h2 > ${this.childMessage2}</h2>
        <label id="replica">Mensaje del componente padre</label>
        </br>
        <input type="text" .value="${this.childMessage3}" @input="${this.inputMethod}">
        </br>
        </br>
        <button class="buttonRed" @click="${this.eventChangeColorRed}" > RED </button>
        </br>
        </br>
        <button class="buttonBlue" @click="${this.eventChangeColorBlue}" > BLUE </button>
        </br>
        </br>
        <button class="buttonGreen" @click="${this.eventChangeColorGreen}" > GREEN </button>
        `;
    }
    eventChangeColorBlue() {
      this.propBtnColor = 'blue';
      this.dispatchEvent(new CustomEvent('someone-push-me',
      {
        detail: {
          bubbles: true, 
          el: this
        }
      }
    ));
    }
    eventChangeColorGreen() {
      this.propBtnColor = 'green';
      this.dispatchEvent(new CustomEvent('someone-push-me',
      {
        detail: {
          bubbles: true, 
          el: this
        }
      }
    ));
    }
    eventChangeColorRed() {
      this.propBtnColor = 'red';
      this.dispatchEvent(new CustomEvent('someone-push-me',
      {
        detail: {
          bubbles: true, 
          el: this
        }
      }
    ));
    }

    inputMethod(event){
      this.name = event.target.value;
      this.shadowRoot.getElementById('replica').innerHTML=this.name;
    }

    static get styles(){
        return css`
          :host{
              display: block;
              background-color: #80FFAC;
              padding: 8px;
              text-align: center;
          }
          .buttonRed{
            border: 0;
            background-color: red;
            width: 100px;
            height: 40px;
            color: #fff;
            font-size: 16px;
          }
          .buttonBlue{
            border: 0;
            background-color: blue;
            width: 100px;
            height: 40px;
            color: #fff;
            font-size: 16px;
          }
          .buttonGreen{
            border: 0;
            background-color: green;
            width: 100px;
            height: 40px;
            color: #fff;
            font-size: 16px;
          }
        `;
    }
    constructor() {
      super();
      this.childMessage3 = 'Mensaje del componente padre';
      this.propBtnColor = 'green';
    }
}
customElements.define('child-component',ChildComponent)
