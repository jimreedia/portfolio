# jimreed.net

Minimal Vite + React website. GitHub Pages deployment is handled by the Actions workflow (`.github/workflows/deploy.yml`), which builds and publishes to the `gh-pages` branch — `docs/` is a local, gitignored build artifact only.

Preview: [jimreedia.github.io/portfolio](https://jimreedia.github.io/portfolio/)

Local dev:
```
npm install
```
```
npm run dev
```

Build (output goes to docs/, gitignored — not what deploys the live site):
```
npm run build
```
