import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/app-bundle.js",
        chunkFileNames: "assets/app-chunk-[name].js",
        assetFileNames: "assets/app-bundle.[ext]",
      },
    },
  },
});
