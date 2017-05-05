class MyHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() { // called on insertion into DOM
    this.innerHTML = `<div class="hero">
    <div class="hero--content">
      <img src="http://images.contentful.com/nrrtr1ne0drv/1Pu2ueqGSoaW8k0AewOiuM/c9ec6c84af060d936378197d510cae50/charlotteee.png?fm=jpg&amp;fl=progressive">
      <div class="hero--text">
        <h3>Sample component Header</h3>
        </div>
      </div>
    </div>`;
  }
}

window.customElements.define('my-header', MyHeader);
