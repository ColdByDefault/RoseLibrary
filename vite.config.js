import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/beRichLibrary/", 
  plugins: [react()],
  /* this server is for local Authentiction and verfiction debugg only */
  /* port: 5173 byDefault*/
  /*server: {
    https: {
      key: fs.readFileSync("localhost-key.pem"),
      cert: fs.readFileSync("localhost.pem"),
    },
    host: "???.???.?.???", */  
  server: {
    host: '0.0.0.0', 
    port: 5173,      
  },
  build: {
    outDir: "dist", 
    sourcemap: true, 
  },
  define: {
    "process.env": process.env,
  },
});
