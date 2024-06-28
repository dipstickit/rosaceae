// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  esbuild: {
    target: "es2021", // hoặc 'esnext' tùy vào nhu cầu của bạn
  },
});
