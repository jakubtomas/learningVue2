<template>
  <div class="about">
    <div>
      <em>Instructiomn</em><br />
      <em>CRUD with async, await , axios </em>
      <h3>using services file for better structure</h3>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <input
            type="checkbox"
            id="checkbox"
            v-model="item.done"
            @change="check(item)"
          />
          <i>{{ item.title }} -- {{ item.text }}</i>
          <span v-on:click="deleteItem(item)">❌</span>
        </li>
      </ul>

      <div>
        <form @submit.prevent="saveItem">
          <label for="title">Title</label>
          <input type="text" v-model="title" />
          <br />
          <label for="text">Text</label>
          <input type="text" v-model="text" />
          <br />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TodoAPI from "../services/TodoAPI";

export default {
  name: "Home",
  components: {
    //  HelloWorld,
  },
  data() {
    return {
      title: "",
      text: "",
      address: "https://629e64f33dda090f3c191498.mockapi.io/todos",
      items: null,
      error: null,
    };
  },
  methods: {
    async saveItem() {
      const data = {
        title: this.title,
        text: this.text,
        done: false,
        date: 1654706962,
        todoId: 45,
      };

      try {
        //const response = await axios.post(this.address + "/2/item", data);
        const response = await TodoAPI.saveItem(data);
        console.log("post response data");
        console.log(response);
        this.loadData();

        this.title = "";
        this.text = "";
      } catch (error) {
        console.log("error");
        console.error(error);
      }
    },
    async deleteItem(item) {
      try {
        //await axios.delete(this.address + "/2/item/" + item.id);
        const response = await TodoAPI.deleteItem(item);
        console.log(" delete response " + response.toString());

        this.loadData();
      } catch (error) {
        console.log("error");
        console.error(error);
      }
    },
    check: function (item) {
      console.log("check click");
      console.log(item);
      this.updateItem(item);
    },

    async updateItem(item) {
      const data = {
        id: item.id,
        title: item.title,
        text: item.text,
        done: item.done,
        date: item.date,
        todoId: item.todoId,
      };

      try {
        //const res = await axios.put(this.address + "/2/item/" + data.id, data);
        const res = await TodoAPI.updateItem(data);
        console.log("update response");
        console.log(res);
        this.loadData();
      } catch (error) {
        console.log("error");
        console.error(error);
      }
    },
    async loadData() {
      try {
        const response = await TodoAPI.getItems();
        console.log("GET responsee");
        console.table(response.data);
        this.items = response.data;
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
ul {
  border: 2px solid #ecec;
  list-style-type: none;
  max-width: 500px;
}
li {
  padding: 5px;
  border-bottom: 2px solid green;
}

input[type="text"],
select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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

.about {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
