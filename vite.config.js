import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base:"/porfolio/",
  plugins: [
    vue(),
  ],
  build: {
    minify:false,
    
    

  },
  resolve: {
    
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'project':fileURLToPath(new URL('./project', import.meta.url))
    }
  }
})
