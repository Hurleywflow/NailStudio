const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3003';
const EVIDENCE_DIR = path.join(__dirname, 'evidence', 'final');

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop-wide', width: 1440, height: 900 },
];

async function captureScreenshots() {
  // Create evidence directories
  viewports.forEach(vp => {
    const dir = path.join(EVIDENCE_DIR, vp.name);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen for console messages
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`[CONSOLE ERROR] ${msg.text()}`);
    }
  });

  // Listen for page errors
  page.on('pageerror', error => {
    console.log(`[PAGE ERROR] ${error.message}`);
  });

  // Listen for failed requests
  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure()?.errorText}`);
  });

  for (const viewport of viewports) {
    console.log(`\n=== Capturing ${viewport.name} (${viewport.width}x${viewport.height}) ===`);

    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Wait for fonts and images to load
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {
      console.log('Network idle timeout, continuing...');
    });

    // Wait a bit more for animations and scroll-driven content
    await page.waitForTimeout(2000);

    // Capture viewport screenshot (above the fold)
    const viewportPath = path.join(EVIDENCE_DIR, viewport.name, `home-${viewport.name}-${viewport.width}x${viewport.height}-viewport.png`);
    await page.screenshot({ path: viewportPath, fullPage: false });
    console.log(`Saved viewport screenshot: ${viewportPath}`);

    // Capture full-page screenshot
    const fullPath = path.join(EVIDENCE_DIR, viewport.name, `home-${viewport.name}-${viewport.width}x${viewport.height}-full.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`Saved full-page screenshot: ${fullPath}`);

    // Check for horizontal overflow
    const overflow = await page.evaluate(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      };
    });
    console.log(`Horizontal overflow check: ${JSON.stringify(overflow)}`);

    // Check for console errors
    const logs = await page.evaluate(() => {
      return window.__consoleLogs || [];
    });
  }

  await browser.close();
  console.log('\n=== Baseline capture complete ===');
}

captureScreenshots().catch(console.error);