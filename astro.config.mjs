import { defineConfig } from "astro/config";

const project = {
  name: "project-entry",
  hooks: {
    "astro:config:setup": ({ injectRoute }) => {
      injectRoute({
        pattern: "/",
        entrypoint: "./project.astro",
      });
    },
  },
};

export default defineConfig({
  site: "https://brenninho123.github.io",
  base: "/BrenninhoShop",
  output: "static",
  trailingSlash: "always",
  srcDir: "./source",
  build: {
    assets: "assets",
  },
  integrations: [project],
});
