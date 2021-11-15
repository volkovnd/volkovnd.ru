import Vue from "vue";

import "@/scss/index.scss";

import "@/plugins/webfonts";
import "@/plugins/global-components";

import router from "@/router";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",

  router,

  render: (h) => h(App),
});
