import Vue from "vue";
import VueRouter from "vue-router";
import vueSmoothScroll from "vue-smooth-scroll";
import checkView from "vue-check-view";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);
Vue.use(vueSmoothScroll);
Vue.use(checkView);

const routes = [
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { auth: true }
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.auth);
  const authed = true; //CHANGE BY AXIOS REQUEST TO API (CHECKING COOKIE)
  if (authRequired && !authed) {
    next("/login");
  } else {
    next();
  }
});

export default router;
