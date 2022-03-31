import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    extensions: [".js", ".vue", ".json", ".scss"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      styles: "src/assets/scss",
    },
  },
});
