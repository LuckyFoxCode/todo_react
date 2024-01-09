import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      data: '/src/data',
      pages: '/src/pages',
      utils: '/src/utils',
      components: '/src/components',
      styles: path.resolve(__dirname, './src/scss/styles.scss'),
    },
  },
});
