import { defineMainzConfig } from "mainz/config";

export default defineMainzConfig({
  runtime: "deno",
  targets: [
    {
      name: "site",
      rootDir: "./site",
      appFile: "./site/src/main.tsx",
      appId: "typecase-site",
      outDir: "dist/site",
    },
  ],
});
