<template>
  <div>
    <h1>router link + router view example</h1>

    <ul>
      <li>
        <router-link to="/router/">a views</router-link>
      </li>
      <li>
        <router-link to="/router/bViews">b vies</router-link>
      </li>
    </ul>

    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      name: "",
    };
  },
  methods: {},
};
</script>

<style>
.error {
  color: red;
}

.router-view {
  margin-top: 20px;
  border: 1px solid black;
}
</style>
