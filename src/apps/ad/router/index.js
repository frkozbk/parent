import Vue from "vue";
import VueRouter from "vue-router";
import Ad from "../components/Ad.vue";
Vue.use(VueRouter);

export const routes = [
  {
    path: "/reklam",
    name: "ad",
    component: Ad,
  },
];
