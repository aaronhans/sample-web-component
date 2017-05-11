class MyWidget extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['widgetid']; // do not use camel case in your attribute names!!
  }
  connectedCallback() {
    this.setAttribute('widgetid','0')
    console.log('my id is: '+this.getAttribute('widgetid'))
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log('attribute changed')
    console.log(attrName)
    let el = this;
    if(newVal==0) {
      //hide single widget, bring back all widgets
    } else {
      getData(newVal,function(data) {
        console.log(data)
        //el.innerHTML = require('./template.js')(data);
      })
    }
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
