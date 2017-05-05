class MyFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() { // called on insertion into DOM
    this.innerHTML = `<footer>page footer</footer>`;
  }
}

window.customElements.define('my-footer', MyFooter);
