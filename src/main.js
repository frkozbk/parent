import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { router } from "./router";
// import { AdPlugin } from "./apps/ad";
import { LoginPlugin } from "fake-login/src/index";
// Vue.use(AdPlugin, { store, router });
Vue.use(LoginPlugin, { store, router });
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store,
  render: (h) => h(App),
});
