import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/c-clear-pool-services-limited/', 
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
