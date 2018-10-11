const puppeteer = require('puppeteer');

(async () => {
  puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
