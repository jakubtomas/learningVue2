<template>
  <div>
    <!--  -->
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <p>Poznamka pridanim col-sm riadku sa to automatickz upravy</p>
    <div class="container">
      <div class="row">
        <div class="col-sm">One of three columns</div>
        <div class="col-sm">One of three columns</div>
        <div class="col-sm">One of three columns</div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <br />
    <p>--------------------------</p>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2">1 of 3</div>
        <div class="col-md-auto">Variable width content</div>
        <div class="col col-lg-2">3 of 3</div>
      </div>
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col-md-auto">Variable width content</div>
        <div class="col col-lg-2">3 of 3</div>
      </div>
    </div>
    <br />
    <br />
    <!--  -->
    <p>--------------------------</p>
    <p>Zmena sirky stlpcov , Pravdepodobne zly sposob aj ked funguje</p>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3">col</div>
        <div class="col-sm-6 col-md-3">col</div>
        <div class="col-sm-6 col-md-3">col</div>
        <div class="col-sm-6 col-md-3">col</div>
      </div>
      <div class="row">
        <div class="col-8">col-8</div>
        <div class="col-4">col-4</div>
      </div>
    </div>

    <br />
    <!--  -->
    <p>/////////////////////</p>
    <p>Zmena riadkov responsive a nemusim nastavovat stlpce</p>
    <div class="container">
      <div class="row row-cols-3 row-cols-md-2">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <h2>----------------------</h2>
    <div class="container">
      <div class="row row-cols-2 row-cols-lg-3">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col-4 col-lg-2">Column</div>
        <div class="col-4 col-lg-2">Column</div>
        <div class="col-4 col-lg-2">Column</div>
        <div class="col-4 col-lg-2">Column</div>
        <div class="col-4 col-lg-2">Column</div>
        <div class="col-4 col-lg-2">Column</div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <h1>Nesting</h1>
    <p>Vnorene riadok do stlpca</p>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">Level 1: .col-sm-3</div>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
            <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
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

.row {
  border: 1px solid green;
}
.col {
  border: 1px solid black;
}
</style>
