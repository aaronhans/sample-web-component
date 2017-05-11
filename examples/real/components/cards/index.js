class MyCards extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let el = this;
    getData(function(data) {
      populateTemplate(el,data);
    })
  }
}

window.customElements.define('my-cards', MyCards);

function getData(callback) {
  fetch('https://aaronhans.github.io/sample-web-component/examples/real/assets/cards.json')
  .then(function(response) {
    return response.text()
    .then(function(json) {
      callback(JSON.parse(json))
    });
  });
}

function populateTemplate(el,data) {
  el.innerHTML = require('./template.js')(data);
  el.querySelectorAll('.cards a').forEach(function(el) {
    el.addEventListener('click',function(event) {
      event.preventDefault();
      document.querySelector('my-widget').setAttribute('widgetId',this.dataset.widgetId);
    })
  })
}
