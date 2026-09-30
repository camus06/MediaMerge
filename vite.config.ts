import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vite.dev/config/
const rootDirectory = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(rootDirectory, "index.html"),
        documentation: resolve(rootDirectory, "documentation.html"),
        accessibility: resolve(rootDirectory, "accessibility.html"),
        privacy: resolve(rootDirectory, "privacy.html"),
        terms: resolve(rootDirectory, "terms.html"),
        status: resolve(rootDirectory, "status.html"),
        contact: resolve(rootDirectory, "contact.html"),
        signin: resolve(rootDirectory, "signin.html"),
      },
    },
  },
});
