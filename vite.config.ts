import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const index = path.resolve('dist/index.html')
      const fallback = path.resolve('dist/404.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, fallback)
      }
    },
  }
}

export default defineConfig({
  // Project Pages URL under A-Koomson. If the GitHub username is later
  // renamed to alexanderkoomson, change this back to '/'.
  base: '/alexanderkoomson.github.io/',
  plugins: [react(), githubPagesSpaFallback()],
})
