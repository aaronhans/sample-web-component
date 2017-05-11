class MyWidget extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['widgetId'];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    let el = this;
    getData(newVal,function(data) {
      el.innerHTML = require('./template.js')(data);
    })
  }
  // templatize single widget data
  // expand to full screen, shrink card view
}

window.customElements.define('my-widget', MyWidget);

function getData(id,callback) {
  fetch('https://aaronhans.github.io/sample-web-component/examples/real/assets/widget-data/widget'+id+'.json')
  .then(function(response) {
    return response.text()
    .then(function(json) {
      callback(JSON.parse(json))
    });
  });
}
