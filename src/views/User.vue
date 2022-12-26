<template>
  <div id="apps">
    <h1>{{ name }}</h1>
    <h1>{{ id }}</h1>
    {{ info }}

    <div>{{ user }}</div>
    <h1>---------------------------</h1>

    <div v-for="(item, index) in user" :key="index" class="user">
      {{ item }}

      <img
        v-if="item.avatar"
        :src="item.avatar"
        alt="Girl in a jacket"
        width="120"
        height="140"
      />
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
      user: [],
      id: this.$route.params.id, // take parameter from url
    };
  },
  filters: {},
  created() {
    fetch("https://reqres.in/api/users/" + this.id)
      .then((response) => response.json())
      .then((json) => (this.user = json));
    //.then(json => console.log(json));
  },

  methods: {},
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
