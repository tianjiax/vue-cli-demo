<template>
	<!-- 拿到父组件的传值 -->
	<li @click="handleDelete">{{ content }}</li>  
</template>

<script>
export default{
	// props获取到父组件传递的方法来进行参数传递
	props:['content','index'],
	methods:{
		// 删除利用 $emit 调用父级的on（@）deleteFun事件，同时传入对应的值给到父级
		handleDelete(){
			var self = this;
			// 传递多个参数写法
			self.$emit('msg',{index:self.index,content:self.content})
			// 传递单个参数写法
			self.$emit('deleteFun',self.index)
		}
	}
}
</script>

<style scoped>

</style>