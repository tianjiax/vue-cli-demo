<template>
	<div>
		<input v-model.trim="inputValue">
		<button @click="handleSubmit">提交</button> 
		<ul>
			<todo-item v-for="(item,index) of list" @deleteFun='handleDelete' :content="item" :index="index"  :key="index"></todo-item>
		</ul>
		{{ list }}
	</div> 
</template>

<script>

import TodoItem from './TodoItem'

export default{
	components:{
		'todo-item':TodoItem
	},
	data(){
		return {
			inputValue:'',
			list:[]
		}
	},
	methods:{
		handleSubmit(){
			var self = this;
			self.list.push(self.inputValue);
			self.inputValue = '';
		},
		handleDelete(index){
			var self = this;
			self.list.splice(index,'1');
			self.inputValue = '';
		}
	}
}

</script>

<style scoped>
ul{
	width:200px;
	margin:0 auto;
	margin-top:20px;
	color:#fff;
}  
li{
	padding:10px 0;
	margin:5px 0;
	background-color:green;
}
</style>