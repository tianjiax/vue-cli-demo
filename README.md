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



### 简单评分系统
> 制作一个简单的评分系统，利用Vue的数据双向绑定功能，通过点击来进行星级评分及数量的对应文字输出。（具体查看demo中的Rating实例及对应的代码注释）

知识点：
- for循环渲染
- 数据传递
- 双向绑定
- 简单数组操作
- 监听器
- 简单运算输出

demo启动后目录：http://localhost:8080/Rating

### 简单父子组件交互
> 制作一个简单的通过输入框来传递值，对子组件数据进行渲染的，同时子组件调用父组件方法进行数据删除的demo（具体查看demo中的TodoList实例及对应的代码注释）

知识点：
- 父组件:content传递给子组件，子组件props:['content']获取参数
- 子组件提过$emit调取父组件@msg方法
- props单参数及多参数获取渲染
- $emit传递单参数及多参数方法

demo启动后目录：http://localhost:8080/TodoList

### 请求获取数据渲染
[测试用ajax接口可支持跨域](https://note.youdao.com/)
> 提过vue-resource来进行动态获取数据的操作（类似ajax作用，具体使用自己查阅文档）。

知识点：
- 动态获取数据并输出
- 衍生接口增删改查

demo启动后目录：http://localhost:8080/resource