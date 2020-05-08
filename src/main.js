import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.scss";
import Axios from "axios";
import VueRouter from "vue-router";
Vue.use(require('vue-cookies'))
Vue.$cookies.config('3h')

//GLOBAL VARS
Vue.prototype.$axios = Axios;
Vue.prototype.$APIURL = "http://localhost:7700";

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
