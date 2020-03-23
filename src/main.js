import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import store from "./store";

//Css Bootstrap

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// CSS Bootstrap Icons

import "bootstrap-vue/dist/bootstrap-vue-icons.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
