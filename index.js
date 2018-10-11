const puppeteer = require('puppeteer');

var express = require(‘express’);
var port = process.env.PORT || 3000;
var app = express();
app.get(‘/’, function (req, res) {
 res.send(JSON.stringify({ Hello: ‘World’}));
 (async () => {
  puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});

