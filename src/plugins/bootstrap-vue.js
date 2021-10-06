import Vue from "vue";
import { DEFAULT_BREAKPOINT } from "@/constants/config";
import { registerPlugins } from "@/utils/plugins";

import { LayoutPlugin, NavbarPlugin, BVConfigPlugin } from "bootstrap-vue";

Vue.use(BVConfigPlugin, {
  breakpoints: DEFAULT_BREAKPOINT,
});

registerPlugins(Vue, { LayoutPlugin, NavbarPlugin });
