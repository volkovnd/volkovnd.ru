/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || "/",
  lintOnSave: false,
  productionSourceMap: false,
  transpileDependencies: true,

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
      .tap((options) => ({
        transformAssetUrls: {
          "v-img": "src",
          ...(options.transformAssetUrls ? options.transformAssetUrls : {}),
        },
        ...options,
      }));
  },

  configureWebpack: (config) => {
    config.devtool = process.env.NODE_ENV === "development" ? "source-map" : false;
  },
};

/** @type {import("webpack-dev-server").Configuration} */
module.exports.devServer = {
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 8080,
  open: true,
  compress: true,

  onBeforeSetupMiddleware: (devServer) => {
    require("./devServer")(devServer);
  },
};
