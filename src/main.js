import Vue from "vue";

import "@/plugins/webfonts";

import store from "./store";
import router from "./router";

import "./plugins/bootstrap-vue";
import "./plugins/globals";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",

  store,
  router,

  render: (h) => h(App),
});
