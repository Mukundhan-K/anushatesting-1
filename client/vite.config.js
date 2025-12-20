import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: 'public/_redirects',
    //       dest: '' // copy to dist root
    //     }
    //   ]
    // })
  ],

  base: '/',
  
  build: {
    outDir: 'dist',
    cssCodeSplit: true,
    sourcemap: false,
    minify: "esbuild"
  },

  server: {
    historyApiFallback: true
  }
})
