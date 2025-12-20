// Lightweight script that generates a PDF from public/resume.html using Puppeteer.
// Usage:
// 1. npm i puppeteer
// 2. node scripts/generate-resume-pdf.js
// Output: public/resume.pdf

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const outPath = path.resolve(__dirname, '..', 'public', 'resume.pdf');
  const resumeUrl = 'file://' + path.resolve(__dirname, '..', 'public', 'resume.html');

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(resumeUrl, { waitUntil: 'networkidle0' });

  await page.pdf({ path: outPath, format: 'A4', printBackground: true, margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' } });

  await browser.close();
  console.log('Generated', outPath);
})();
