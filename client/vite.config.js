import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects',
          dest: '' // copy to dist root
        }
      ]
    })
    // compression({ algorithm: "brotliCompress", ext: ".br"}),
    // compression({ algorithm: "gzip", ext: ".gz"}),
  ],

  base: '/',
  
  build: {
    outDir: 'dist',
    cssCodeSplit: true,
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
       input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          redux: ["react-redux"],
        },
      },
    },
  },

  publicDir: 'public', // ensures public folder is copied to dist
  
  server: {
    historyApiFallback: true
  }
})
