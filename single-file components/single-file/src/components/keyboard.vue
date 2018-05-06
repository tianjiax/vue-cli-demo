<template>
	<div @click="getKeyboardValue">{{ value }}</div>
</template>

<script>
export default{
	props:['value'],
	// 在Vuex中不能任意修改应用层的状态，要修改，就得用它提供的唯一途径：通过commit提交mutation。
	methods:{
		getKeyboardValue(event){
			// 避免this指向问题
			var self = this;
			// 获取当前的按键的值
			let value = self.value;
			//通过commit提交mutation
			self.$store.commit('calculate',value)
		}
	}
}
</script>

<style>
	
</style>