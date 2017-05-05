module.exports = function(data) {
  return `<ul class="cards">
    ${data.widgets.map(function (item) {
      return `<li class="widget-card">
        <a href="/widgets/${item.id}">
          <span class="widget-name">${wiget-name}</span>
          <img class="widget=graphic" src="${item.graphic}">
        </a>
      </li>`;
    }).join('\n      ')}
  </ul>`;
}
