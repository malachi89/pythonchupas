import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig(({ command }) => ({
  base: './',
  plugins: [
    react(),
    ...(command === 'build' ? [viteSingleFile()] : []),
  ],
  server: {
    port: 8080,
    open: true,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
}))
