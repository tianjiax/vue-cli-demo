<template>
	<div>
		<div class="query-box" v-if="this.$route.name == 'demo'">
			<div>我是链接上拼接参数的name：{{ name }}</div>
			<div>我是链接上拼接参数的txt：{{ this.$route.query.txt }}</div>	
		</div>
		<div  class="route-a-box">
			<router-link class="router-a" to="/demo/Rating">星级评分</router-link>
			<router-link class="router-a" to="/demo/TodoList">列表操作</router-link>
			<router-link class="router-a" to="/demo/resource">动态数据</router-link>
			<router-link class="router-a" to="/demo/infinite-loading">无限滚动</router-link>
			<router-link class="router-a" to="/demo/Calculator">计算器</router-link>
			<router-link class="router-a" to="/demo/VuexDemo">Vuex简单计算demo</router-link>
		</div>
		<transition name="component-fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default{
	data(){
		return{
			name:'',
			txt:''
		}
	},
	// 组件实例化完毕，页面未显示时候进行赋值
	created(){
		var self = this;
		// 获取链接拼接的值
		self.name = self.$route.query.name;
	}
}
</script>

<style scoped>
.query-box{
	margin: 10px;
}
.route-a-box{
}
.router-a{
  padding:10px;
  color:#35495e;
  border-bottom:1px solid #35495e;
  text-decoration:none;
  margin:5px;
  font-size:14px;
}
.router-link-exact-active.router-link-active{
  color:blue;
  border-bottom-color:blue
}
</style>