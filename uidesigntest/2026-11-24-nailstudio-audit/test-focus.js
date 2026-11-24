const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3003';

async function testFocus() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);

  // Test skip link focus
  console.log('=== Testing skip link focus ===');
  const skipLink = await page.$('a[href="#main"]');
  await skipLink.focus();
  await page.waitForTimeout(100);

  const skipLinkStyles = await page.evaluate(() => {
    const link = document.querySelector('a[href="#main"]');
    const style = window.getComputedStyle(link);
    return {
      transform: style.transform,
      top: style.top,
      left: style.left,
      opacity: style.opacity,
      visibility: style.visibility,
      outline: style.outline,
      outlineColor: style.outlineColor,
      outlineOffset: style.outlineOffset,
    };
  });
  console.log('Skip link on focus:', skipLinkStyles);

  // Test focus on a navigation link
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
    };
  });
  console.log('Nav link on focus:', navLinkStyles);

  // Test focus on a button
  console.log('\n=== Testing button focus ===');
  const button = await page.$('button');
  await button.focus();
  await page.waitForTimeout(100);

  const buttonStyles = await page.evaluate(() => {
    const btn = document.querySelector('button');
    const style = window.getComputedStyle(btn);
    return {
      outline: style.outline,
      outlineColor: style.outlineColor,
      outlineOffset: style.outlineOffset,
    };
  });
  console.log('Button on focus:', buttonStyles);

  await browser.close();
}

testFocus().catch(console.error);