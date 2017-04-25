class MyNestedComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() { // called on insertion into DOM
    this.innerHTML = `what is up?`;
  }
}

window.customElements.define('my-nested-component', MyNestedComponent);
