import Vue from "vue";

import { WebFontPlugin } from "@/plugins/webfont";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(WebFontPlugin);

new Vue({
  el: "#app",

  render: (h) => h(App),
});
