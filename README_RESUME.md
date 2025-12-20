Resume generation instructions

This repository includes a printable HTML resume at `public/resume.html`.

To generate a downloadable PDF (`public/resume.pdf`) locally, follow these steps:

1. From the project root, install Puppeteer (one-time):

```powershell
Set-Location 'D:\Downloads\CapstoneModule\Portfolio-Website'
npm install puppeteer --save-dev
```

2. Run the generate script:

```powershell
node scripts/generate-resume-pdf.js
```

3. The generated PDF will be saved at `public/resume.pdf` and can be downloaded from your deployed site at `https://<your-vercel-site>/resume.pdf` once you push and deploy.

Notes:
- If you prefer not to install Puppeteer, you can open `public/resume.html` in Chrome/Edge and print to PDF (File → Print → Save as PDF). Use A4 paper and enable "Background graphics" for best results.
- The HTML file uses `public/images/avatar.png` for the avatar. If your avatar file has a different name (e.g., `avatar.jfif`), either update `public/resume.html` or create a copy named `avatar.png`.
- If you want changes (layout, fonts, content), edit `public/resume.html` and regenerate the PDF.

If you want, I can:
- Attempt to run the PDF generation here (requires installing dependencies and may need a larger environment). Or
- Commit the changes and push to your GitHub repo, then you can trigger Vercel to redeploy and the PDF will be available at `/resume.pdf` after you run the script locally and commit the generated PDF.
