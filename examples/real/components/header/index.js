class MyHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() { // called on insertion into DOM
    this.innerHTML = `<div class="hero">
    <div class="hero--content">
      <img src="https://unsplash.it/2000/400/?random">
      <div class="hero--text">
        <h3>Sample component Header</h3>
        </div>
      </div>
    </div>`;
  }
}

window.customElements.define('my-header', MyHeader);
