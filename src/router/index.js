import Vue from "vue";
import VueRouter from "vue-router";
import vueSmoothScroll from "vue-smooth-scroll";
import checkView from "vue-check-view";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Login from "../views/Login.vue";
import Axios from "axios";

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

router.beforeEach(function(to, from, next) {
  const authRequired = to.matched.some(route => route.meta.auth);

  if (authRequired) {
    if ($cookies.get("Session")){
    Axios.get("http://localhost:7700" + '/login', {params: {
      UserID: $cookies.get("Session").data
    }})
    .then((r)=>{
      if (r.data == "USERAUTH")
        next();
      else
        next("/login");
    })
    .catch((e)=>{
      next("/login");
    })
    } else 
    next("/login");
  } else {
    next();
  }
});

export default router;
