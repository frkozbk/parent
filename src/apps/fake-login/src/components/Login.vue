<template>
  <div class="wrapper">
    <div class="container">
      <h1>Sub app 1</h1>
      <h1>Login</h1>
      <form class="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit" id="login-button">Login</button>
      </form>
      <li><router-link to="/hello">Hello</router-link></li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
