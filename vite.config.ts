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
        team: resolve(root, 'team.html'),
        spotlight: resolve(root, 'spotlight.html'),
        tutorial: resolve(root, 'tutorial.html'),
        valentine: resolve(root, 'valentine.html'),
      }
    }
  }
})
