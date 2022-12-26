<template>
  <div class="">Component BB</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {},
      notification: "",
    };
  },
  created() {
    console.log("created function bVIEWS");
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => (this.users = json.data));
  },
};
</script>

<style scoped></style>
