(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var MyCards = function (_CustomElement2) {
  _inherits(MyCards, _CustomElement2);

  function MyCards() {
    _classCallCheck(this, MyCards);

    return _possibleConstructorReturn(this, (MyCards.__proto__ || Object.getPrototypeOf(MyCards)).call(this));
  }

  _createClass(MyCards, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var el = this;
      getData(function (data) {
        populateTemplate(el, data);
      });
    }
  }]);

  return MyCards;
}(_CustomElement);

window.customElements.define('my-cards', MyCards);

function getData(callback) {
  fetch('https://aaronhans.github.io/sample-web-component/examples/real/assets/cards.json').then(function (response) {
    return response.text().then(function (json) {
      callback(JSON.parse(json));
    });
  });
}

function populateTemplate(el, data) {
  el.innerHTML = require('./template.js')(data);
  el.querySelectorAll('.cards a').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      console.log(this);
    });
    // find the widget component
    // set the clicked widget id attribute on it
  });
}

},{"./template.js":2}],2:[function(require,module,exports){
'use strict';

module.exports = function (data) {
  return '<ul class="cards">\n    ' + data.widgets.map(function (item) {
    return '<li class="widget-card">\n        <a href="/widgets/' + item.id + '">\n          <span class="widget-name">' + item.name + '</span>\n          <img class="widget-graphic" src="https://aaronhans.github.io/sample-web-component/examples/real/assets/' + item.graphic + '">\n        </a>\n      </li>';
  }).join('\n      ') + '\n  </ul>';
};

},{}]},{},[1]);
