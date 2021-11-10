const express = require("express");

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
    sourceMap: process.env.NODE_ENV === "development",

    loaderOptions: {
      scss: {
        additionalData: bootstrapSassAbstractsImports.join("\n"),
      },
    },
  },

  configureWebpack: (config) => {
    config.devtool = config.mode === "development" ? "source-map" : false;
  },
};

/** @type {import("webpack-dev-server").Configuration} */
module.exports.devServer = {
  transportMode: { client: "ws", server: "ws" },
  noInfo: true,
  before: (app) => {
    app.use(express.json());
  },
};
