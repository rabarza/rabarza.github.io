import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: el sitio vive en la raíz de https://rabarza.github.io/
export default defineConfig({
  base: "/",
  plugins: [react()],
});
