/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
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
  noInfo: true,
  transportMode: "ws",
  before: (app) => {
    require("./devServer")(app);
  },
};
