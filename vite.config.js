import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace YOUR-USER with your GitHub username
export default defineConfig({
  plugins: [react()],
  base: "/prajnalabs-site/",
});