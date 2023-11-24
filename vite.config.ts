import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@images": "/assets/images",
      "@icons": "/assets/icons",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@globals": "/src/global",
    },
  },
});
