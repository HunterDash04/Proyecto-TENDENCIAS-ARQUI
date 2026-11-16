import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// MOCKUP: sin proxy hacia ningún backend.
// `base` es el nombre del repositorio, necesario para GitHub Pages.
export default defineConfig({
  base: "/Proyecto-TENDENCIAS-ARQUI/",
  plugins: [react()],
});
