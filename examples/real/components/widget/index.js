class MyWidget extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['widgetid']; // do not use camel case in your attribute names
  }
  connectedCallback() {
    this.setAttribute('widgetid','none')
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    let el = this;
    if(newVal==0) {
      showCards(el)
    }
    if(oldVal) { //attributeChangedCallback is called on initial creation, but oldVal is null in that case
      document.querySelector('my-cards .component-container').classList.toggle('closed');
      getData(newVal,function(data) {
        el.innerHTML = require('./template.js')(data);
        console.log(el.getBoundingClientRect().width); // necessary read line
        el.style.display = 'block';
        el.querySelector('.component-container').classList.toggle('closed');
        addCloseWidgetListener(el);
      })
    }
  }
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

function addCloseWidgetListener(el) {
  el.querySelector('.close-panel').addEventListener('click',function(event) {
    showCards(el);
  })
}

function showCards(el) {
  el.querySelector('.component-container').classList.toggle('closed');
  setTimeout(function() {
    el.style.display = 'none';
  },1000)
  document.querySelector('my-cards .component-container').classList.toggle('closed');
}
