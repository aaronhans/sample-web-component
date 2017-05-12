var express = require('express')
var app = express()

app.get('/', function (req, res) {
  let me = 'aaron'
  res.send(`hello ${me}`);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
