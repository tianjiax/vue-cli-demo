import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Rating from '@/components/Rating'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {//需要跳转的页面
        path:'/Rating',
        name:'Rating',
        component:Rating//组件名字
    }
  ]
})
