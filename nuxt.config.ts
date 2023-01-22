// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
   typescript: {
    shim: false,
  },
  telemetry: false,
  srcDir: "src/",
  css: ["vuetify/lib/styles/main.sass", "@/assets/css/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/google-fonts"],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});
