import { defineConfig } from "vite";
import react from "@vitejs/vite-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/micro-interactions-lab/",
});
