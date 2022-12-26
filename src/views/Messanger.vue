<template>
  <div>
    <h4>{{ name }}</h4>
    <h1>---------------------------</h1>
    <form @submit.prevent="createAccount">
      <label for="title">First name</label>
      <input type="text" v-model="fname" required />
      <br />
      <label for="text">Last Name </label>
      <input type="text" v-model="lname" required />
      <br />
      <label for="text">Login </label>
      <input type="text" v-model="login" required />
      <br />
      <button type="submit">SEND</button>
    </form>

    <div v-if="result">{{ result }}</div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data: function () {
    return {
      name: "Messanger API/Validation Form ",
      fname: "default firstName",
      lname: "default firstName",
      login: "",
      array: [],
      info: null,
      data: null,
      result: null,
      users: [],
      id: "",
      users2: {},
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  created() {},

  methods: {
    createAccount: function () {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        fname: this.fname,
        lname: this.lname,
        login: this.login,
        password: "password123123",
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      console.log(raw);
      fetch("http://localhost:8080/signup", requestOptions)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.result = json;
        })
        .catch((error) => console.log("problem", error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.redcolor {
  color: red;
}

.user {
  border: 2px solid black;
  margin: 10px 0px;
  max-width: 50%;
  margin: 0 auto;
}

button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

form {
  background-color: #f2f2f2;
  border: 1px solid black;
  padding: 10px;
  max-width: 500px;
}
</style>
]
