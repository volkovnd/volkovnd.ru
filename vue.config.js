const bootstrapSassAbstractsImports = [
  '@import "~bootstrap/scss/_functions.scss"',
  '@import "~bootstrap/scss/_variables.scss"',
  '@import "~@/scss/_custom.scss"',
  '@import "~bootstrap/scss/_mixins.scss"',
  '@import "~bootstrap/scss/_utilities.scss"',
];

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== "production",

    loaderOptions: {
      sass: {
        additionalData: bootstrapSassAbstractsImports.join("\n"),
      },
      scss: {
        additionalData: [...bootstrapSassAbstractsImports, ""].join(";\n"),
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
