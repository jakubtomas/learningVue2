<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input id="name" v-model="name" :class="{ error: errors.name }" />
    <span v-if="errors.name" class="error">{{ errors.name[0] }}</span>

    <br />
    <br />
    <label for="email">Email:</label>
    <input
      id="email"
      v-model="email"
      :class="{ error: errors.email }"
      type="email"
    />
    <br />
    <span v-if="errors.email" class="error">{{ errors.email[0] }}</span>

    <br />
    <label for="password">Password:</label>
    <input
      id="password"
      v-model="password"
      :class="{ error: errors.password }"
      type="password"
    />
    <br />
    <span v-if="errors.password" class="error">{{ errors.password[0] }}</span>

    <br />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

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
  methods: {
    submitForm() {},
    validateEmail(email) {
      const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
