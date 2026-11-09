# Brand Hub

A lightweight brand guidelines site (logos, colours, typography, tone of voice, do's & don'ts) plus a **recruitment toolkit** (EVP, values, benefits, hiring process, job-ad guidance, inclusive language, copy-ready templates, social specs).

Built with Next.js, with no database and nothing to configure. It deploys to Vercel in a few clicks.

## 1. Make it yours

**Almost everything lives in one file: `brand.config.js`.** Edit the text, colours and lists there, and the whole site updates.

- **Logos:** drop your files (SVG or PNG) into `public/logos/`, then update the `logos` list in `brand.config.js` with the file names. The three logos included are placeholders.
- **Colours:** only the hex value is needed. RGB and CMYK are calculated automatically. If your printer has given you exact CMYK values, add `cmyk: "0, 49, 100, 3"` to that colour to override the calculation.
- **Fonts:** use any Google Font. Set `family` and `googleFont` (for example `"Poppins:wght@600;700"`).
- **Recruitment:** everything under `recruitment:` covers your EVP, benefits, hiring steps, templates and so on. Add or remove items freely.

To change the site's accent colours, edit the variables at the top of `app/globals.css` (`--accent`, `--navy`).

## 2. Run it locally (optional)

You need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## 3. Deploy to Vercel

1. Create a new repository on [GitHub](https://github.com/new) and upload this folder to it. You can drag and drop the files on GitHub's "uploading an existing file" page. Don't upload `node_modules`.
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and **Import** the repository.
3. Vercel detects Next.js automatically. Click **Deploy**.
4. You'll get a live link (`your-project.vercel.app`). To use your own domain, go to **Settings → Domains** in Vercel.

From then on, every change you push to GitHub (even an edit to `brand.config.js` in GitHub's web editor) redeploys the site automatically.

### Keeping it private

If the hub is internal only, turn on **Settings → Deployment Protection** in Vercel. Password protection is available on paid plans. Free accounts can restrict access to Vercel team members.

## Project structure

```
brand.config.js        ← all your content
app/page.jsx           ← page layout & sections
app/globals.css        ← styling
components/            ← copy button + colour conversion
public/logos/          ← your logo files
```
