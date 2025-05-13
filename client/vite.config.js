import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    port: 3000,
    host: true,
    allowedHosts: ['evshif-portafolio-frontend.onrender.com']
  }
})
