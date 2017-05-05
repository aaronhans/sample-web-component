class MyCards extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    getData(function(data) {
      populateTemplate(this,data);
    })
  }
}

window.customElements.define('my-cards', MyCards);

function getData(callback) {
  fetch('cards.json')
  .then(function(response) {
    return response.json()
    .then(function(json) {
      callback(json)
    });
  });
}

function populateTemplate(el,data) {
  el.innerHTML = require('./template.js')(data);
}
