import Vue from "vue";
import Vuex from "vuex";
import app1state from "./modules/app1state";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app1state,
  },
});
export default store;
