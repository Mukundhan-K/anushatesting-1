import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // compression({ algorithm: "brotliCompress", ext: ".br"}),
    // compression({ algorithm: "gzip", ext: ".gz"}),
  ],

  base: '/',
  
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          redux: ["react-redux"],
        },
      },
    },
  },

  server: {
    historyApiFallback: true
  }
})
