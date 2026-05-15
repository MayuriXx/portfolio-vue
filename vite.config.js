/**
 * vite.config.js
 *
 * Vite build configuration.
 * `base` is set to the GitHub repository name so that all asset URLs
 * are correctly prefixed when served from GitHub Pages.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // base must match the GitHub repository name for asset paths to resolve
  // correctly on GitHub Pages (https://<user>.github.io/<repo>/)
  base: "/portfolio-vue/",
});
