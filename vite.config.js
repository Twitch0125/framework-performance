import { defineConfig } from "vite";
import { presetUno } from "unocss";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    vue(),
    // react(), for some reason I can't have solid AND react plugins
    svelte(),
    solid(),
    UnoCSS({
      presets: [presetUno({})],
      include: ["./src/**/*.{jsx,vue,tsx,js,ts}"],
      shortcuts: {
        btn: "border-1 rounded px-3 py-2",
        "btn-primary": "border-orange-600 bg-orange-50/90 text-orange-600 font-bold",
        "btn-neutral": "bg-white border-gray-700 text-gray-900",
      },
    }),
  ],
});
