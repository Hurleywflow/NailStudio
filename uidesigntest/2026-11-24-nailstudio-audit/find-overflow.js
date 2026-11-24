const { chromium } = require('playwright');

const BASE_URL = 'http://localhost:3003';

async function findOverflow() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2000);

  const overflowElements = await page.evaluate(() => {
    const results = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    while (walker.nextNode()) {
      const el = walker.currentNode;
      const rect = el.getBoundingClientRect();
      if (rect.right > 375 || rect.left < 0 || rect.width > 375) {
        const style = window.getComputedStyle(el);
        results.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          rect: { left: rect.left, right: rect.right, width: rect.width },
          overflow: style.overflow,
          overflowX: style.overflowX,
        });
      }
    }
    return results;
  });
  console.log('Elements causing overflow:', overflowElements);

  await browser.close();
}

findOverflow().catch(console.error);