import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    host: true,
    allowedHosts: ['evshif-portafolio-frontend.onrender.com']
  }
})
