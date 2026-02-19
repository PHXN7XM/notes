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
        src: "/src/assets/shion.webp",
      },
      customCss: ["./src/styles/custom.css"],
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
        {
          label: "Inglés",
          autogenerate: { directory: "ingles" },
        },
        {
          label: "Análisis de Datos",
          autogenerate: { directory: "analisis_de_datos" },
        },
        {
          label: "Excel",
          autogenerate: { directory: "excel" },
        },
        {
          label: "OverTheWire",
          autogenerate: { directory: "overthewire" },
        },
        {
          label: "Lógica de programación",
          autogenerate: { directory: "logica_programacion" },
        },
      ],
    }),
  ],

  adapter: vercel(),
});
