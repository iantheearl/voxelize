import path from "path";

import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";

import { version } from "./package.json";

export default defineConfig({
  plugins: [
    externalizeDeps({
      except: [/three\/examples\//],
    }),
  ],
  base: "./", // needed to make web workers work: https://github.com/vitejs/vite/discussions/15547#discussioncomment-8950765
  build: {
    minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "index",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {},
  },
});
