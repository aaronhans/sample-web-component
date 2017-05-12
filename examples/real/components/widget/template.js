module.exports = function(data) {
  let widget = data.widget;
  return `<div class="full-widget component-container closed">
    <h1>${widget.name}</h1>
    <span class="close-panel">X</span>
    <img class="widget-graphic" src="https://aaronhans.github.io/sample-web-component/examples/real/assets/${widget.graphic}">
    <div class="description">${widget.description}</div>
  </div>`
}
