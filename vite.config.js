import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({

  server: {
    proxy: {
      '/user': 'https://iqpath2yuvi.onrender.com'
    },
    watch:{
      usePolling: true,
    }
  },
  plugins: [
    react(),
    svgr()
  ],
});
