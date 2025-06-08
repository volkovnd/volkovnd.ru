import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, telemetry: false },
  telemetry: false,

  vue: {
    transformAssetUrls: {
      "v-img": ["src"]
    }
  },

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
  },

  compatibilityDate: "2025-02-17"
});
