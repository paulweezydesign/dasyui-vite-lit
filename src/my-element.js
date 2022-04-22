import './app.css';

import { html, LitElement } from 'lit';

export class MyElement extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }
  render() {
    return html`
      <h1 class="text-6xl">Hello Vite + Lit </h1>
      <button class="btn btn-secondary text-lg">Hello daisyUI</button>
    `;
  }
}

window.customElements.define('my-element', MyElement);
