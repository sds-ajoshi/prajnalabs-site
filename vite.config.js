import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/prajnalabs-site/",            // <- keep for GitHub Pages
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),   // <- this fixes "@/..." imports
    },
  },
});