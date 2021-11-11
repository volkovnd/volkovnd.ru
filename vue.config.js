/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || "/",
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV === "development",

    loaderOptions: {
      scss: {
        additionalData: [
          "~bootstrap/scss/_functions.scss",
          "~@/scss/_variables.scss",
          "~bootstrap/scss/_variables.scss",
          "~bootstrap/scss/_mixins.scss",
        ]
          .map((p) => `@import "${p}";`)
          .join("\n"),
      },
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        const transformAssetUrls = options.transformAssetUrls || {};

        return {
          transformAssetUrls: {
            ...transformAssetUrls,

            "v-img": ["src"],
          },
          ...options,
        };
      });
  },

  configureWebpack: (config) => {
    config.devtool = process.env.NODE_ENV === "development" ? "source-map" : false;
  },
};
