import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs' // build output goes to docs/ so GitHub Pages can serve from main/docs
  }
})
