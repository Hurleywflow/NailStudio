const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3003';

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop-wide', width: 1440, height: 900 },
];

async function inspectIssues() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen for console messages
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`[CONSOLE ERROR] ${msg.text()}`);
    }
  });

  page.on('pageerror', error => {
    console.log(`[PAGE ERROR] ${error.message}`);
  });

  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure()?.errorText}`);
  });

  for (const viewport of viewports) {
    console.log(`\n=== Inspecting ${viewport.name} (${viewport.width}x${viewport.height}) ===`);

    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(2000);

    // ISS-002: Hero image object-position on mobile
    if (viewport.name === 'mobile') {
      const heroImage = await page.evaluate(() => {
        const img = document.querySelector('[data-hero-media]');
        if (!img) return null;
        const style = window.getComputedStyle(img);
        return {
          objectPosition: style.objectPosition,
          objectFit: style.objectFit,
          width: img.offsetWidth,
          height: img.offsetHeight,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        };
      });
      console.log('Hero image:', heroImage);
    }

    // ISS-004: PanGallery card widths at tablet
    if (viewport.name === 'tablet') {
      const panCards = await page.evaluate(() => {
        const cards = document.querySelectorAll('[data-pan-track] figure');
        return Array.from(cards).map(card => ({
          width: card.offsetWidth,
          className: card.className,
        }));
      });
      console.log('PanGallery cards (tablet):', panCards);
    }

    // ISS-005: DriftGallery columns on mobile
    if (viewport.name === 'mobile') {
      const driftColumns = await page.evaluate(() => {
        const container = document.querySelector('#pedicure .grid');
        if (!container) return null;
        const style = window.getComputedStyle(container);
        return {
          gridTemplateColumns: style.gridTemplateColumns,
          gap: style.gap,
          childrenCount: container.children.length,
          childWidths: Array.from(container.children).map(c => c.offsetWidth),
        };
      });
      console.log('DriftGallery (mobile):', driftColumns);
    }

    // ISS-007: Services images hidden on mobile
    if (viewport.name === 'mobile') {
      const servicesImages = await page.evaluate(() => {
        const images = document.querySelectorAll('#services .md\\:block');
        return Array.from(images).map(img => ({
          display: window.getComputedStyle(img).display,
          width: img.offsetWidth,
          height: img.offsetHeight,
        }));
      });
      console.log('Services images (mobile):', servicesImages);
    }

    // ISS-009: Skip to content link
    const skipLink = await page.evaluate(() => {
      const link = document.querySelector('a[href="#main"]');
      if (!link) return null;
      const style = window.getComputedStyle(link);
      return {
        transform: style.transform,
        position: style.position,
        top: style.top,
        left: style.left,
        zIndex: style.zIndex,
        visibility: style.visibility,
        opacity: style.opacity,
      };
    });
    console.log('Skip link:', skipLink);

    // ISS-012: Focus visible outline on different backgrounds
    const focusTest = await page.evaluate(() => {
      const focusable = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      const results = [];
      focusable.forEach(el => {
        const style = window.getComputedStyle(el);
        results.push({
          tag: el.tagName,
          className: el.className,
          outline: style.outline,
          outlineColor: style.outlineColor,
          outlineOffset: style.outlineOffset,
          backgroundColor: style.backgroundColor,
        });
      });
      return results.slice(0, 10); // First 10
    });
    console.log('Focus styles (sample):', focusTest);

    // ISS-013: Hero service tags wrapping
    if (viewport.name === 'mobile') {
      const tags = await page.evaluate(() => {
        const container = document.querySelector('[class*="flex-wrap"]');
        if (!container) return null;
        const style = window.getComputedStyle(container);
        const children = Array.from(container.children);
        return {
          flexWrap: style.flexWrap,
          gap: style.gap,
          childrenCount: children.length,
          childWidths: children.map(c => c.offsetWidth),
          containerWidth: container.offsetWidth,
        };
      });
      console.log('Hero service tags:', tags);
    }

    // ISS-014: Reviews grid
    const reviewsGrid = await page.evaluate(() => {
      const grid = document.querySelector('#reviews ul');
      if (!grid) return null;
      const style = window.getComputedStyle(grid);
      return {
        gridTemplateColumns: style.gridTemplateColumns,
        gap: style.gap,
        childrenCount: grid.children.length,
        childWidths: Array.from(grid.children).map(c => c.offsetWidth),
      };
    });
    console.log('Reviews grid:', reviewsGrid);

    // Check for horizontal overflow
    const overflow = await page.evaluate(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      };
    });
    console.log('Horizontal overflow:', overflow);

    // Check all images loaded
    const images = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img');
      return Array.from(imgs).map(img => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        display: window.getComputedStyle(img).display,
        width: img.offsetWidth,
        height: img.offsetHeight,
      })).filter(img => !img.complete || img.naturalWidth === 0);
    });
    if (images.length > 0) {
      console.log('Broken/loading images:', images);
    } else {
      console.log('All images loaded successfully');
    }
  }

  await browser.close();
  console.log('\n=== Inspection complete ===');
}

inspectIssues().catch(console.error);