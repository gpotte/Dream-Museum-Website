import Vue from "vue";
import VueRouter from "vue-router";
import vueSmoothScroll from "vue-smooth-scroll";
import checkView from "vue-check-view";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(vueSmoothScroll);
Vue.use(checkView);

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
