<template>
  <div>
    <h1>Component AAAA</h1>
  </div>
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
  methods: {},
  created() {
    console.log("created function aViews");
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => (this.users = json.data));
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
