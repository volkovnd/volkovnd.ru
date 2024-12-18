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

  spaLoadingTemplate: false,

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

  experimental: {
    appManifest: false,
    renderJsonPayloads: false,
    payloadExtraction: false
  },

  typescript: {
    strict: true
  },

  features: {
    inlineStyles: false
  },

  nitro: {
    preset: "static"
  },

  compatibilityDate: "2024-04-03",

  eslint: {
    checker: true
  },

  stylelint: {
    lintOnStart: false,
    build: true,
    dev: false,

    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.nuxt/**",
      "**/.output/**",
      "**/.vscode/**",
      "**/public/**",
      "virtual:"
    ],
    config: {
      extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue/scss",
        "stylelint-config-recess-order"
      ]
    }
  }
});
