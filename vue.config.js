const bootstrapSassAbstractsImports = [
  "~bootstrap/scss/_functions.scss",
  "~bootstrap/scss/_variables.scss",
  "~@/scss/_custom.scss",
  "~bootstrap/scss/_mixins.scss",
  "~bootstrap/scss/_utilities.scss",
].map((p) => `@import "${p}";`);

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== "production",

    loaderOptions: {
      scss: {
        additionalData: bootstrapSassAbstractsImports.join("\n"),
      },
    },
  },

  configureWebpack: (config) => {
    config.devtool = config.mode === "production" ? false : "source-map";
  },
};

/** @type {import("webpack-dev-server").Configuration} */
module.exports.devServer = {
  logLevel: "silent",
  transportMode: { client: "ws", server: "ws" },
  clientLogLevel: "none",
  compress: true,
  hot: true,
  quiet: false,
};
