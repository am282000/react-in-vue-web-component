// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/MyWebComponent.jsx",
      name: "MyWebComponent",
      fileName: "my-web-component",
      formats: ["es"], // or ['umd'] if needed
    },
  },
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
});
