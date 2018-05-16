<template>
	<div>
		<button @click="add">add</button>
		<button @click="decrease">decrease</button>
		<div>{{ count }}</div>
		<div>{{ getOdd }}</div>
	</div>
</template>

<script>

export default {
	// 得到计算后的值
	// 提过计算属性获取vuex的全局变量
	computed:{
		count(){
			// 普通数据调用方法
			return this.$store.state.count
		},
		getOdd(){
			// getters调用方法
			return this.$store.getters.getOdd
		}
	},
    // 在Vuex中不能任意修改应用层的状态，要修改，就得用它提供的唯一途径：通过commit提交mutation。
	methods:{
		add(){
			// 避免this指向问题
			var self = this;
			//通过commit提交mutation
			self.$store.commit('add')
		},
		decrease(decrease){
		 	// 避免this指向问题
			var self = this;
			//通过commit提交mutation
	        self.$store.commit('decrease')
	    }
	}
}
</script>

<style scoped>
button{
	font-size: 0.4rem;
	padding: 0 0.2rem
}
</style>