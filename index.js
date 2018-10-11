var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 80))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
