<template>
  <div>
    <h2>mnau manu</h2>
    <h1>{{ name }}</h1>
    {{ info }}
    <button v-on:click="createAPIwords">createAPI</button>
    <div>{{ data }}</div>
    <h1>---------------------------</h1>

    <div v-for="item in data" :key="item.id">
      <h2>Email : {{ item.email }}</h2>
      <a :href="'https://reqres.in/api/users/' + item.id">{{
        item.id + item.last_name
      }}</a>
      <br />
      <img :src="item.avatar" alt="Girl in a jacket" width="120" height="140" />

      <p>{{ item.text }}</p>
    </div>
    <h1>---------------------------</h1>
    <div>{{ users }}</div>
    <h1>---------------------------</h1>
    <div v-for="(item, index) in users" :key="index" class="user">
      <router-link v-bind:to="'/user/' + parseInt(index + 1)">
        <div v:bind:id="1">{{ item.first_name }}</div>
      </router-link>
      {{ item.id }}
      {{ item.email }} <br />
      {{ item.first_name }}
      {{ item.last_name }} <br />
      {{ item.avatar }} <br />
      <img :src="item.avatar" alt="Girl in a jacket" width="120" height="140" />
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data: function () {
    return {
      name: "Click button create API",
      array: [],
      info: null,
      data: null,
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
  created() {
    //  axios
    //  .get("https://reqres.in/api/users/2")
    //.then(response => (this.info = response.data.bpi));

    console.log("created function");
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => (this.users = json.data));
  },

  methods: {
    createAPIwords: function () {
      fetch("https://reqres.in/api/users/2")
        .then((response) => response.json())
        .then((json) => (this.data = json));
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
</style>
