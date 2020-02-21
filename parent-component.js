import {LitElement, html, css} from 'lit-element';

import './child-component'

class ParentComponent extends LitElement{
    static get properties(){
        return { childMessage:{type: String},
        propColor:{type: String}
      }
    }
    render(){
        return html`
            <style>
            :host{
            display: block;
            padding: 8px;
            background-color: ${this.propColor};
            text-align: center;
        }
          </style>
          <h1> ${this.childMessage} </h1>
          <h3>Jugando con colores</h3>
          <child-component childMessage2="CHILD COMPONENT" @someone-push-me="${this.someonePush}">
          </my-second-component>
          `;
    }
    constructor() {
      super();
      this.propColor = 'green';
    }
    someonePush(event) {
      this.propColor = (event.detail.el.propBtnColor);
    }
    static get styles(){
        return css`
        h3{
            color: white;
        }
        `
    }
}

customElements.define('parent-component',ParentComponent);
