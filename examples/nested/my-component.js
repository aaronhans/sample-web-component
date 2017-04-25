class MyComponent extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['greeting'];
  }
  connectedCallback() { // called on insertion into DOM
    let target = 'everybody';
    this.innerHTML = `hello ${target}
    <my-nested-component></my-nested-component>`;
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(this.innerHTML)
    this.innerHTML = 'hello '+newVal;
  }
}

window.customElements.define('my-component', MyComponent);
