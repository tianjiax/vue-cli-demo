# 简单插件开发
> 基于vue-cli开发，简单的一些组件及vue-cli问题的记录。

请自行下载vue-cli demo进行查看
```
# 全局安装 vue-cli
$ npm install --global vue-cli
# 下载demo
$ git clone https://github.com/tianjiax/vue-cli-demo.git
# 进入项目
$ cd single-file components
# 安装依赖
$ npm init
# 启动项目
$ npm run dev
```
### 组件生命周期方法及调用的时机
官网流程图
![image](https://cn.vuejs.org/images/lifecycle.png)
对应生命周期方法及调用的时机
![image](https://s1.ax1x.com/2018/04/29/CGiVZn.png)

### 路由
> 简单路由配置及子路由配置，详看如下：

```html
<!-- App.vue页面 -->
<template>
  <div id="app">
    <div class="route-a-box">
      <router-link class="router-a" to="/">home</router-link>
      <router-link class="router-a" to="/demo">demo</router-link>
    </div> 
    <router-view/>
  </div>
</template>

<script>

// Vue 实例化
export default {
  // vue组件的name属性主要用于方便debug.
  name: 'App'
}
</script>

<style>
...
</style>
```

```js
// router中的index.js页面

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import Rating from '@/components/Rating'
import TodoList from '@/components/TodoList'

// 使用路由
Vue.use(Router)

export default new Router({
　mode: 'history', //可以是去掉#号
  routes: [
    {// 首页
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {// demo
      path:'/demo',
      name: 'demo',
      component: demo,
      // 子路由配置
      children:[
        {// 评分页面
            path:'/Rating',
            name:'Rating',
            component:Rating//组件名字
        },
        {// 列表生成
            path:'/TodoList',
            name:'TodoList',
            component:TodoList//组件名字
        }
      ]
    }
    
  ]
})

```
### 局部组件及全局组件
局部组件：
通过在App.vue中引入组件及定义components来进行输出渲染。

```html
<!-- App.vue -->
<template>
    <div id="app">
        ...
        <!-- 驼峰写法可转化为此 -->
        <header-com></header-com>
        ...
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

<style>
...
</style>
```
全局组件：
通过在main.js中定义全局组件，并且在App.vue中引入组件标签来进行输出渲染。

```js
// main.js
...
import footer from '@/components/footer.vue'

// 全局组件
Vue.component('footer-com',footer)

...
```
```html
<!-- App.vue -->
<template>
    <div id="app">
        ...
        <footer-com></footer-com>
        ...
    </div>
</template>

<script>
// Vue 实例化
export default {
  // vue组件的name属性主要用于方便debug.
  name: 'App'
}
</script>

<style>
...
</style>
```

## demo

### 简单评分系统
> 制作一个简单的评分系统，利用Vue的数据双向绑定功能，通过点击来进行星级评分及数量的对应文字输出。（具体查看demo中的Rating实例及对应的代码注释）

知识点：
- for循环渲染
- 数据传递
- 双向绑定
- 简单数组操作
- 监听器
- 简单运算输出

demo启动后目录：http://localhost:8080/demo//Rating

### 简单父子组件交互
> 制作一个简单的通过输入框来传递值，对子组件数据进行渲染的，同时子组件调用父组件方法进行数据删除的demo（具体查看demo中的TodoList实例及对应的代码注释）

知识点：
- 父组件:content传递给子组件，子组件props:['content']获取参数
- 子组件提过$emit调取父组件@msg方法
- props单参数及多参数获取渲染
- $emit传递单参数及多参数方法

demo启动后目录：http://localhost:8080/demo//TodoList

### 请求获取数据渲染
[测试用ajax接口可支持跨域](http://jsonplaceholder.typicode.com/posts)
> 提过vue-resource来进行动态获取数据的操作（类似ajax作用，具体使用自己查阅文档）。

知识点：
- 动态获取数据并输出
- 衍生接口增删改查

demo启动后目录：http://localhost:8080/demo//resource

### 下拉加载
[参考文档](https://www.jianshu.com/p/bfb5ca56b4fb)
[测试用ajax接口可支持跨域](http://hn.algolia.com/api/v1/search_by_date?tags=story)
> vue-infinite-loading 是一个使用在Vue.js中的无限滚动插件，它可以帮助你快速创建一个无限滚动列表。提过配合ajax分页接口可以达到下拉刷新的效果，同时对移动端的支持友好。

特点：
- 移动端支持友好
- 兼容任何一个可以滚动的元素
- 有不同的旋转器可以作为加载动画
- 支持加载后显示结果
- 支持两个方向的无限加载

知识点：
- 分页数据下滑展示
- 移动端下拉刷新
- 加载状态

demo启动后目录：http://localhost:8080/demo/infinite-loadingurce

### 简单计算器
[参考文档](https://mp.weixin.qq.com/s/xmNKIODUR3T9sbuoj8c6qw)
Vuex适合在较为大型复杂的项目中使用。在实际开发过程中，简单的计算器也许只算得上是一个简单的小项目，你完全可以不用Vuex来实现。所以，以下我们演示的案例只作为demo来讲解Vuex，让大家能够轻松地搞懂Vuex的用法，不代表在实际开发中的做法。
> vuex 全局变量的简单使用及数据传递。该demo中应用的vuex在src目录下的main.js

知识点：
- 全局变量
- 在Vuex中不能任意修改应用层的状态，要修改，就得用它提供的唯一途径：通过commit提交mutation。
- 提过计算属性computed与this.$store获取数据

demo启动后目录：http://localhost:8080/demo/Calculator

### vuex
https://www.imooc.com/article/22719
https://www.imooc.com/article/22673
组件外部管理状态
全局变量
多个或者单个组件在其修改时同时更新（必须使用该变量），只能通过mutations改变