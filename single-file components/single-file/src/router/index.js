import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import Rating from '@/components/Rating'
import TodoList from '@/components/TodoList'
import resource from '@/components/resource'
import infiniteLoading from '@/components/infinite-loading'
import Calculator from '@/components/Calculator'
import VuexDemo from '@/components/VuexDemo'

// 使用路由
Vue.use(Router)
// 使用ajax
Vue.use(VueResource)

export default new Router({
  //vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
  //如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
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
            path:'/demo/Rating',
            name:'Rating',
            component:Rating//组件名字
        },
        {// 列表生成
            path:'/demo/TodoList',
            name:'TodoList',
            component:TodoList//组件名字
        },
        {// 获取数据方式，类似ajax
            path:'/demo/resource',
            name:'resource',
            component:resource//组件名字
        },
        {// 无限滚动插件
            path:'/demo/infinite-loading',
            name:'infinite-loading',
            component:infiniteLoading//组件名字
        },
        {// 计算器
            path:'/demo/Calculator',
            name:'Calculator',
            component:Calculator//组件名字
        },
        {// vuex的简单应用
            path:'/demo/VuexDemo',
            name:'VuexDemo',
            component:VuexDemo//组件名字
        }
      ]
    }
    
  ]
})
