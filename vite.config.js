import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'bootstrap/dist/css/bootstrap.min.css';`
      }
    }
  },
  server: {
    hmr: {
      overlay: true, // You can change this to false if you don't want the overlay
    },
  },
});
