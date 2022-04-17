const puppeteer = require('puppeteer');

const runTest = async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto('https://kimcarterbadbank2.herokuapp.com/#/');

  await page.click('.nav-link');
};

runTest()
