class Chatter extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['greeting'];
  }
  connectedCallback() { // called on insertion into DOM
    this.greeting = this.defineTerm();
    this.chatBuddy = null;
    var me = this;
    setTimeout(function() {
      document.querySelectorAll('defective-chatter').forEach(function(el) {
        if(el != me) {
          me.chatBuddy = el;
        } else {
        }
      })
      me.setAttribute('greeting','value')
    },300)
  }
  defineTerm() {
    return termsArr[parseInt(Math.random() * termsArr.length)];
  }
  resetHTML() {
    this.innerHTML = `${this.greeting}`;
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.greeting = newVal;
    this.resetHTML()
    if(this.chatBuddy) {
      var me = this;
      setTimeout(function() {
        me.chatBuddy.setAttribute('greeting',termsArr[parseInt(Math.random() * termsArr.length)])
      },1500)
    } else {
      console.log(this.chatBuddy)
    }
  }
}

window.customElements.define('defective-chatter', Chatter);
