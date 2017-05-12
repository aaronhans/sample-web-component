module.exports = function(data) {
  return `<div class="component-container">
    <ul class="cards">
      ${data.widgets.map(function (item) {
        return `<li class="widget-card">
          <a href="/widgets/${item.id}" data-widget-id="${item.id}">
            <span class="widget-name">${item.name}</span>
            <img class="widget-graphic" src="https://aaronhans.github.io/sample-web-component/examples/real/assets/${item.graphic}">
          </a>
        </li>`;
      }).join('\n      ')}
    </ul>
  </div>`;
}
