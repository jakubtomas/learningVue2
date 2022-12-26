<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Todo app</router-link>|
      <router-link to="/about2">Todo2 app</router-link>|
      <router-link to="/api">Fetch Data</router-link>|
      <router-link to="/messanger">Messanger</router-link>|
      <router-link to="/form">Form Validation</router-link>|
      <router-link to="/bootstrap">bootstrap</router-link>|
      <router-link to="/router">router</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
