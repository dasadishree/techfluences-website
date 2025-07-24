import {resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
// https://vitejs.dev/config/
export default defineConfig({
  root, 
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir: true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
        blog: resolve(root, 'blogpage.html'),
        blogjs: resolve(root, 'blog.tsx'),
        team: resolve(root, 'team.html'),
        spotlight: resolve(root, 'spotlight.html'),
        resources: resolve(root, 'resources.html'),
        tutorial: resolve(root, 'tutorial.html'),
        'valentine': resolve(root, 'tutorial-pages/valentine.html'),
        'pythonbasics': resolve(root, 'tutorial-pages/pythonbasics.html'),
        'cybersecurity-catastrophe': resolve(root, 'blog-pages/cybersecurity-catastrophe.html'),
        'history-of-coding': resolve(root, 'blog-pages/history-of-coding.html'),
        'web-dev-basics': resolve(root, 'blog-pages/web-dev-basics.html'),
        'history-of-debugging': resolve(root, 'blog-pages/history-of-debugging.html'),
        'cybersecurity-basics': resolve(root, 'blog-pages/cybersecurity-basics.html'),
        'ai-glow-up': resolve(root, 'blog-pages/ai-glow-up.html'),
        'women-in-tech': resolve(root, 'blog-pages/women-in-tech.html'),
        'grace-hopper': resolve(root, 'blog-pages/grace-hopper.html'),
        'data-privacy': resolve(root, 'blog-pages/data-privacy.html'),
        'reshma-saujani': resolve(root, 'blog-pages/reshma-saujani.html'),
        'ethical-hacking': resolve(root, 'blog-pages/ethical-hacking.html'),
        'illusion-of-choice': resolve(root, 'blog-pages/illusion-of-choice.html')
      }
    }
  }
})
