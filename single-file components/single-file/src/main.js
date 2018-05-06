// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import footer from '@/components/footer.vue'

// 阻止启动生产消息，常用作指令。
Vue.config.productionTip = false

// 全局组件
Vue.component('footer-com',footer)

// 使用全局vuex
Vue.use(Vuex)

//创建仓库store
const store = new Vuex.Store({
  state:{
	result:"",// 运算结果
	enter:""  // 输入的值
  },
  // Action 相当于一把手枪，mutation 相当于里面的子弹，靶心就是 state， 得分指示牌就是 getter 。
  // 在Vuex中不能任意修改应用层的状态，要修改，就得用它提供的唯一途径：通过commit提交mutation。
  mutations:{
	calculate(state,value){
		if(value === '='){
			//按键的值为=，进行结果计算
			state.result = eval(state.enter);
			state.enter += value;
		}else if(value === 'clear'){
			//按键的值为clear，清空数据
			state.result = state.enter = "";
		}else{
			//输入结果enter进行拼接
			state.enter += value;
		}
	}
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')//实例挂载到元素中