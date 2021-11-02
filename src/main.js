import Vue from "vue";

import router from "./router";

import App from "./App.vue";

import { WebFontPlugin } from "@/plugins/webfont";

Vue.config.productionTip = false;

Vue.use(WebFontPlugin);

new Vue({
  el: "#app",

  router,

  render: (h) => h(App),
});
