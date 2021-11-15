import Vue from "vue";

const context = require.context("@/components", true, /\.(vue|js)$/);

context.keys().forEach((key) => {
  const name = key.replace(/^\..*\//, "").replace(/\.(vue|js)$/, "");
  const options = context(key).default;

  Vue.component(name, options);
});
