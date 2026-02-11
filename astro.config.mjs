// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/public/shion.ico",
      title: "PHXNTXM",
      logo: {
        src: "/public/shion.ico",
      },
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/PHXN7XM",
        },
      ],
      sidebar: [
        {
          label: "Sistemas de estudio",
          autogenerate: { directory: "sistemasestudio" },
        },
      ],
    }),
  ],

  adapter: vercel(),
});