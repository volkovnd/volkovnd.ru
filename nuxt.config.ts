import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, telemetry: false },
  telemetry: false,
  css: ["~/assets/scss/index.scss"],

  vue: {
    transformAssetUrls: {
      "v-img": ["src"]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["color-functions", "import", "global-builtin", "legacy-js-api"],
          additionalData: [
            "bootstrap/scss/functions",
            "~/assets/scss/variables",
            "bootstrap/scss/variables",
            "bootstrap/scss/variables-dark",
            "bootstrap/scss/maps",
            "bootstrap/scss/mixins",
            "bootstrap/scss/utilities"
          ]
            .map((p) => `@import "${p}";`)
            .join("\n")
        }
      }
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
