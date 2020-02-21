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
          <h1> ${this.childMessage} </h1>
          <h3>Jugando con colores</h3>
          <child-component childMessage2="CHILD COMPONENT" @someone-push-me="${this.someonePush}">
          </my-second-component>
          `;
    }

    someonePush(event) {
      this.propColor = (event.detail.el.propBtnColor);
    }
    static get styles(){
        return css`
        :host{
            display: block;
            padding: 8px;
            background-color: var('${this.propColor}');
            text-align: center;
        }
        `
    }
    constructor() {
      super();
      this.propColor = 'green';
    }

}

customElements.define('parent-component',ParentComponent);
