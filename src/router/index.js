import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import(/* webpackChunkName: "home-page" */ "@/pages/home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import(/* webpackChunkName: "about-page" */ "@/pages/about.vue"),
    },
  ],
  linkActiveClass: "",
  linkExactActiveClass: "active",
});

export default router;
