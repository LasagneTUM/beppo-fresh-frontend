import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// const mode = process.env.APP_ENV;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: mode === "production" ? "/beppo-fresh-frontend/" : undefined,
});
