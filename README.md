# InsureAI Lanka - AI-Powered vehicle Insurance

This is a modern, AI-powered vehicle insurance landing page designed for Sri Lanka, featuring a compact glass-morphic navigation system and real-time AI assistance.

## 🚀 Deployment Guide (Vercel)

To host this website on your own Vercel account, follow these steps:

1. **Upload to GitHub**: Create a new repository and push the files listed in the "What to Upload" section below.
2. **Connect to Vercel**: In your Vercel dashboard, click "New Project" and import your GitHub repository.
3. **Environment Variables**: 
   - During setup, add an Environment Variable named `GROQ_API_KEY`.
   - Copy the value from your local `.env.local` file into Vercel.
4. **Deploy**: Click "Deploy" and Vercel will handle the rest!

---

## 📂 Project Structure (GitHub Upload Guide)

To ensure a smooth **Drag and Drop** upload to GitHub and prevent build errors, please follow this simplified checklist. 

### ✅ Files to Upload (SLECT ALL THESE)
If you are dragging files to GitHub, select these and only these:
- `src/` (All code)
- `public/` (Images/Icons)
- `.env.example`
- `.eslintrc.json`
- `.gitignore` (Important 🛡️)
- `ABOUT_PROJECT.md`
- `README.md`
- `next.config.mjs`
- `package-lock.json`
- `package.json`
- `postcss.config.mjs`
- `tailwind.config.js`
- `tsconfig.json`

### ❌ Files to IGNORE (DO NOT Drag/Upload)
These folders are either too large or contain private data:
- `.github/` — **DELETE THIS** if it exists. It causes the build error you saw.
- `.env.local` — (Contains your private API Keys 🔑)
- `node_modules/` — (Temporary downloads)
- `.next/` — (Temporary build data)
- `dev_tools/` — (Developer scripts/layouts)

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
Developed by **Geeth N. Sandaruwan**
