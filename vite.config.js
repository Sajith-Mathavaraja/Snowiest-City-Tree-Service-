import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/Snowiest-City-Tree-Service-/' : '/',
  resolve: {
    alias: {
      'framer-motion': '/src/components/framer-motion-shim.jsx',
      'react-dom/client': '/src/components/react-preact-compat-shim.js',
      'react-dom/test-utils': '/src/components/react-preact-compat-shim.js',
      'react-dom': '/src/components/react-preact-compat-shim.js',
      'react/jsx-runtime': 'preact/jsx-runtime',
      'react': '/src/components/react-preact-compat-shim.js'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            return 'vendor-libs';
          }
        }
      }
    }
  }
}))
