<template>
  <div id="app">
    Parent App
    <Dashboard />
    <router-view />
    <!-- {{ loginStatus }} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Dashboard from "./components/Dashboard";
export default {
  name: "App",
  components: {
    Dashboard,
  },
  computed: {
    ...mapGetters({
      loginStatus: "app2state/getLoginStatus",
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
