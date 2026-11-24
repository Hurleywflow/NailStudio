const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3003';

async function testFocus() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);

  // Check if nav link has the focus-visible classes
  const navLinkClasses = await page.evaluate(() => {
    const link = document.querySelector('nav a');
    return link ? link.className : 'NOT FOUND';
  });
  console.log('Nav link classes:', navLinkClasses);

  // Test focus on nav link
  console.log('\n=== Testing nav link focus ===');
  const navLink = await page.$('nav a');
  await navLink.focus();
  await page.waitForTimeout(100);

  const navLinkStyles = await page.evaluate(() => {
    const link = document.querySelector('nav a');
    const style = window.getComputedStyle(link);
    return {
      outline: style.outline,
      outlineColor: style.outlineColor,
      outlineOffset: style.outlineOffset,
      boxShadow: style.boxShadow,
      className: link.className,
    };
  });
  console.log('Nav link on focus:', navLinkStyles);

  await browser.close();
}

testFocus().catch(console.error);