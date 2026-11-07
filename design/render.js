const { chromium } = require('playwright');
(async () => {
  const [,, html, out, scale] = process.argv;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: Number(scale||1) });
  await p.goto('file://' + html);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  await p.locator('#poster').screenshot({ path: out });
  await b.close();
})();
