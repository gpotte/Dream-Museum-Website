import Vue from "vue";
import VueRouter from "vue-router";
import vueSmoothScroll from "vue-smooth-scroll";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(vueSmoothScroll);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
