// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxtjs/tailwindcss"],

  devtools: { enabled: true },

  runtimeConfig: {
    apiBaseUrl: "http://localhost:8000",
  },
  compatibilityDate: "2025-07-15",

  eslint: {
    config: {
      stylistic: true,
    },
  },
});
