import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, telemetry: false },
  telemetry: false,

  app: {
    baseURL: import.meta.env.NUXT_APP_BASE_URL || "/",
    head: {
      htmlAttrs: {
        lang: "ru"
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${import.meta.env.NUXT_APP_BASE_URL || "/"}favicon.ico`
        }
      ]
    }
  },

  modules: ["@nuxtjs/google-fonts", "@nuxt/eslint", "@nuxtjs/stylelint-module"],

  runtimeConfig: {
    public: {
      title: import.meta.env.NUXT_APP_TITLE || ""
    }
  },

  css: ["@/assets/scss/reset.scss", "@/assets/scss/helpers.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "assets/scss/variables" as *;'
        }
      }
    }
  },

  googleFonts: {
    families: {
      "Open Sans": {
        wght: [300, 400, 500, 700]
      }
    },

    display: "swap"
  },

  nitro: {
    preset: "static"
  },

  eslint: {
    checker: true
  }
});
