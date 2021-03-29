import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/Dashboard.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/hello",
    name: "hello",
    component: () =>
      import(
        /*webpackChunkName: 'app2.HelloWorld.vue' */ "../components/HelloWorld.vue"
      ),
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
