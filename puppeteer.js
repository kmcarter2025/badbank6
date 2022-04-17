const puppeteer = require('puppeteer');

const runTest = async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto('http://localhost:3000/');

  await page.click('.nav-link');
};

runTest()
