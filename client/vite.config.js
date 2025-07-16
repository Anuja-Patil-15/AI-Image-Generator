import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // optional, default for Vite
  },
  server: {
    host: true, // optional, allows external access (e.g. in LAN)
    port: 5173, // optional
  }
})
