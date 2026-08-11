# hello-react

Minimal Vite + React "Hello, World!" site configured to build into `docs/` for GitHub Pages.

Local dev:
```
npm install
npm run dev
```

Build (output goes to docs/):
```
npm run build
```

Publish to GitHub Pages (manual):
1. Create a repo on GitHub (or use `gh repo create`).
2. Commit and push your code to `main`.
3. In the repo on GitHub: Settings → Pages → Source: Branch `main`, folder `/docs`.
4. Wait a minute — site will be available at `https://<username>.github.io/<repo>/`.

Or create the repo and push from the command line:
```
git init
git add .
git commit -m "Initial Hello World React site"
# create repo and push (uses gh CLI)
gh repo create hello-react --public --source=. --remote=origin --push
```
