import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Rating from '@/components/Rating'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {// 首页
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
})
