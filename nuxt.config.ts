// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
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
});
