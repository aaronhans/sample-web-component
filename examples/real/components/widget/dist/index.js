(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./template.js":2}],2:[function(require,module,exports){
module.exports = function(data) {
  let widget = data.widget;
  return `<div class="full-widget component-container closed">
    <h1>${widget.name}</h1>
    <span class="close-panel">X</span>
    <img class="widget-graphic" src="https://aaronhans.github.io/sample-web-component/examples/real/assets/${widget.graphic}">
    <div class="description">${widget.description}</div>
  </div>`
}

},{}]},{},[1]);
