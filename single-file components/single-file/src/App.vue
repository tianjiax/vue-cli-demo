<template>
  <div id="app">
    <header-com></header-com>
    <img src="./assets/logo.png" style="display:none">
    <p>当前路由name：{{ this.$route.name }}</p>
    <p>当前路由path：{{ this.$route.path }}</p>
    <div class="route-a-box">
      <router-link class="router-a" to="/">home</router-link>
      <router-link class="router-a" :to="{path:'/demo',query:{name:'demo',txt:'举个栗子'}}">demo</router-link>
    </div> 
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
    <footer-com></footer-com>
  </div>
</template>

<script>
// 局部组件
import header from '@/components/header.vue';

// Vue 实例化
export default {
  // vue组件的name属性主要用于方便debug.
  name: 'App',
  // 引入组件
  components:{
    'headerCom':header
  }
}
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 1rem 0;
  font-size:0.28em;
}
.route-a-box{
  margin-bottom:0.20rem;
  font-size: 0.3rem
}
.router-a{
  padding:0.10rem;
  color:green;
  border-bottom:0.01rem solid green;
  text-decoration:none;
  margin:0.05rem;
}
.router-link-exact-active.router-link-active{
  color:red;
  border-bottom-color:red
}
/* 简单组件切换动画 */
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
