import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/beRichLibrary/", 
  plugins: [react()],
  server: {
    host: "0.0.0.0", 
    port: 5173, 
    open: true, 
  },
  build: {
    outDir: "dist", 
    sourcemap: true, 
  },
  define: {
    "process.env": process.env,
  },
});
