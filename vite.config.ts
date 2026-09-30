import { resolve } from 'node:path';

const root = import.meta.dirname;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// One HTML entry per page so every route is a real static file (no SPA fallback needed).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        privacy: resolve(root, 'privacy-policy/index.html'),
        terms: resolve(root, 'terms-and-conditions/index.html'),
        cookies: resolve(root, 'cookie-policy/index.html'),
      },
    },
  },
});
