<template>
  <div>
    <p>Basic validation by conditions</p>
    <p>use axios with control response, and notification</p>
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
  methods: {
    submitForm() {
      // Reset the errors
      this.errors = {};

      // Validate the form fields
      if (!this.name) {
        this.errors.name = ["The name field is required."];
      }

      if (!this.email) {
        this.errors.email = ["The email field is required."];
      } else if (!this.validateEmail(this.email)) {
        this.errors.email = ["The email is invalid."];
      }

      if (!this.password) {
        this.errors.password = ["The password field is required."];
      } else if (this.password.length < 6) {
        this.errors.password = ["The password must be at least 6 characters."];
      }

      // If there are no errors, submit the form
      if (Object.keys(this.errors).length === 0) {
        console.log("splnene podmienkz ");
        axios
          .post("https://example.com/api/sign-in", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            // Handle response from API
            if (response.data.success) {
              this.notification = "Sign in successful!";
            } else {
              this.notification = "Sign in failed. Please try again.";
            }
          })
          .catch((error) => {
            this.notification = "Sign in failed. Please try again.";
          });
      }
    },
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
