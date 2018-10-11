const puppeteer = require('puppeteer');

var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 80))

app.get('/', function(request, response) {
 
   (async () => {
  puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
     await response.send('Hello World!');
})();
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
