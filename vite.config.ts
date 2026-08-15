import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { projectSlugs, staticPageRoutes } from './src/data/routes.ts'

function githubPagesStaticRoutes() {
  return {
    name: 'github-pages-static-routes',
    closeBundle() {
      const index = path.resolve('dist/index.html')
      if (!fs.existsSync(index)) return

      const html = fs.readFileSync(index, 'utf8')
      const routes = [
        ...staticPageRoutes,
        ...projectSlugs.map((slug) => path.join('projects', slug)),
      ]

      for (const route of routes) {
        const dir = path.resolve('dist', route)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), html)
      }

      fs.copyFileSync(index, path.resolve('dist/404.html'))
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), githubPagesStaticRoutes()],
})
