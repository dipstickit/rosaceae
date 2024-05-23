import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir: "build", }, 
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

