const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3003';

async function verifyServices() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2000);

  const servicesImages = await page.evaluate(() => {
    const images = document.querySelectorAll('#services img');
    return Array.from(images).map(img => ({
      src: img.src,
      alt: img.alt,
      display: window.getComputedStyle(img).display,
      width: img.offsetWidth,
      height: img.offsetHeight,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
    }));
  });
  console.log('Services images (mobile):', servicesImages);

  await browser.close();
}

verifyServices().catch(console.error);