import Vue from "vue";

import App from "./App.vue";

import WebFontPlugin from "@/plugins/webfont";

import { WEB_FONT_CONFIG } from "@/config";

Vue.config.productionTip = false;

Vue.use(WebFontPlugin, WEB_FONT_CONFIG);

new Vue({
  el: "#app",

  render: (h) => h(App),
});
