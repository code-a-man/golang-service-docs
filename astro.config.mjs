import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Golang Service Template",
      social: {
        github: "https://github.com/eser/golang-service-template",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "Overview", slug: "introduction/overview" },
            { label: "Contrubuting", slug: "introduction/contributing" },
          ],
        },
        {
          label: "Getting Started",
          items: [
            { label: "Quick Start", slug: "getting-started/quick-start" },
            { label: "Installation", slug: "getting-started/installation" },
            {
              label: "Running Project",
              slug: "getting-started/running-project",
            },
          ],
        },

        {
          label: "ADR",
          autogenerate: { directory: "adr" },
        },
      ],
    }),
  ],
});
