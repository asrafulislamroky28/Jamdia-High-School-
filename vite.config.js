import { defineConfig } from 'vite'
// import your framework plugin if needed, e.g., for React:
import react from '@vitejs/plugin-react'  
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),            
    tailwindcss()       
  ],
})
