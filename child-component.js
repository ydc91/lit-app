import { LitElement, html, css } from 'lit-element';

class ChildComponent extends LitElement{
    static get properties(){
        return {
          childMessage2:{ type: String},
          childMessage3:{ type: String}
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
        <button class="buttonRed" @click="${this.eventChangeColor}" > RED </button>
        </br>
        </br>
        <button class="buttonBlue" @click="${this.eventChangeColor}" > BLUE </button>
        </br>
        </br>
        <button class="buttonGreen" @click="${this.eventChangeColor}" > GREEN </button>
        `;
    }
    eventChangeColor() {
      //this.shadowRoot.getElementById('Parent').style.backgroundColor = "blue";
      //document.querySelector('Parent').element.styles = "backgroundColor = 'blue'";
      /*let a = document.getElementsById(${this.id});
      a.style.backgroundColor = "blue";*/
      //document.querySelector('Parent').css = "{background-color: #blue;}";
      return html`
      html {
        --parent-component-background-color: blue;
      }
      `;
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
    }
}
customElements.define('child-component',ChildComponent)