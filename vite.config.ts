import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Menjamin kompatibilitas deploy ke Vercel, GitHub Pages (subfolder), maupun XAMPP lokal
})
