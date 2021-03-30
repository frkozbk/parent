import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
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
