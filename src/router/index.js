import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || __dirname,

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});
