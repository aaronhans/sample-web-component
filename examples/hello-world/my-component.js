class MyComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() { // called on insertion into DOM
    this.innerHTML = `hello world`;
  }
}

window.customElements.define('my-component', MyComponent);
