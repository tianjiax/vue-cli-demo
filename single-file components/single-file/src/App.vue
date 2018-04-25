<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="route-a-box">
      <router-link class="router-a" to="/">home</router-link>
      <router-link class="router-a" to="/Rating">Star</router-link>
      <router-link class="router-a" to="/TodoList">TodoList</router-link>
    </div> 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.route-a-box{
  margin-bottom:20px;
}
.router-a{
  padding:10px;
  color:green;
  border-bottom:1px solid green;
  text-decoration:none;
  margin:5px;
}
.router-link-exact-active.router-link-active{
  color:red;
  border-bottom-color:red
}
</style>
