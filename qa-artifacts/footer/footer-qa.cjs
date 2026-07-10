const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
(async () => {
  const widths = [1440,1280,1024,768,430,390,360];
  const outDir = path.join(process.cwd(), 'qa-artifacts', 'footer');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const results = [];
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 1100 } });
    await page.goto('http://localhost:3001/', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(outDir, `${width}-footer.png`), fullPage: false });
    const result = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      const headings = [...footer.querySelectorAll('h2')].map(h => ({ text: h.textContent.trim(), top: Math.round(h.getBoundingClientRect().top), left: Math.round(h.getBoundingClientRect().left) }));
      const links = [...footer.querySelectorAll('a')].map(a => ({ text: a.textContent.trim(), href: a.href, top: Math.round(a.getBoundingClientRect().top), left: Math.round(a.getBoundingClientRect().left), right: Math.round(a.getBoundingClientRect().right), width: Math.round(a.getBoundingClientRect().width), height: Math.round(a.getBoundingClientRect().height), target: a.target, rel: a.rel }));
      const contactCount = links.filter(l => l.text === 'Contact').length;
      const southAfrica = links.find(l => l.text === 'Webcam Sex South Africa');
      const footerRect = footer.getBoundingClientRect();
      const overflow = document.documentElement.scrollWidth - window.innerWidth;
      const offscreen = links.filter(l => l.left < -1 || l.right > window.innerWidth + 1);
      const friendHeading = headings.find(h => h.text === 'Friend Sites');
      const compareHeading = headings.find(h => h.text === 'Compare');
      const sameBaseline = friendHeading && compareHeading ? Math.abs(friendHeading.top - compareHeading.top) <= 4 : false;
      const friendLinks = links.filter(l => ['Sesso Chat','Webcam Sex','Modelle Webcam','Live Cam Italia','Webcam Sex South Africa'].includes(l.text));
      const friendRelOk = friendLinks.every(l => l.target === '_blank' && l.rel === 'noopener noreferrer nofollow');
      return { overflow, footerHeight: Math.round(footerRect.height), headings, contactCount, southAfrica, offscreen, sameBaseline, friendRelOk, friendLinks };
    });
    results.push({ width, ...result });
    await page.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(outDir, 'footer-qa.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results.map(r => ({ width: r.width, overflow: r.overflow, footerHeight: r.footerHeight, contactCount: r.contactCount, sameBaseline: r.sameBaseline, friendRelOk: r.friendRelOk, southAfricaWidth: r.southAfrica?.width, southAfricaHeight: r.southAfrica?.height, offscreen: r.offscreen.length })), null, 2));
  const failures = results.filter(r => r.overflow > 0 || r.contactCount !== 1 || r.offscreen.length || !r.friendRelOk || (r.width >= 1280 && !r.sameBaseline));
  process.exit(failures.length ? 1 : 0);
})();
