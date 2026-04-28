import { defineConfig } from 'vite'

export default defineConfig({
  // index.html en la raíz del proyecto (por defecto en Vite)
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
