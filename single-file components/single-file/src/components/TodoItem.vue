<template>
	<li @click="handleDelete">{{ content }}</li>  
</template>

<script>
export default{
	props:['content','index'],
	methods:{
		handleDelete(){
			var self = this;
			this.$emit('deleteFun',self.index)
		}
	}
}
</script>

<style scoped>

</style>