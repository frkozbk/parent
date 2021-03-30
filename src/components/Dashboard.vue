<template>
  <div class="hello">
    Dashboard
    <ul>
      <li><router-link to="/route1">App 1</router-link></li>
      <li><router-link to="/route2">App 2</router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters({
      loginStatus: "auth/getLoginStatus",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
