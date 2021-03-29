<template>
  <div>{{ loginStatus }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Ad",
  computed: {
    ...mapGetters({
      loginStatus: "auth/getLoginStatus",
    }),
  },
};
</script>

<style></style>
