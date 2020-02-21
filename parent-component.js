import {LitElement, html, css} from 'lit-element';

import './child-component'

class ParentComponent extends LitElement{
    static get properties(){
        return { childMessage:{type: String}
      }
    }
    render(){
        return html`
          <h1> ${this.childMessage} </h1>
          <h3>Jugando con colores</h3>
          <child-component childMessage2="CHILD COMPONENT">
          </my-second-component>
          `;
    }
    static get styles(){
        return css`
        :host{
            display: block;
            padding: 8px;
            background-color: var(--parent-component-background-color);
            text-align: center;
        }
        `
    }

}

customElements.define('parent-component',ParentComponent);