<template>
	<div>
		<input v-model.trim="inputValue">
		<button @click="handleSubmit">提交</button> 
		<ul>
			<!-- 循环输出数组的值，并用:(v-bind) :content与:index传递内容及索引。
			同时on（@）绑定事件让子组件可以利用 $emit 调用到该方法来执行删除或者其他操作 -->
			<todo-item v-for="(item,index) of list" @deleteFun='handleDelete' @msg="msgFun" :content="item" :index="index"  :key="index"></todo-item>
		</ul>
		{{ list }}
	</div> 
</template>

<script>
// 引入子组件
import TodoItem from './TodoItem'

export default{
	// 子组件的定义输出标签
	components:{
		'todo-item':TodoItem
	},
	// 数据存放
	data(){
		return {
			inputValue:'',
			list:[]
		}
	},
	methods:{
		// 数组元素添加操作
		handleSubmit(){
			var self = this;
			self.list.push(self.inputValue);
			self.inputValue = '';
		},
		// 数组元素删除操作，获取到子组件 $emit 传入的值
		handleDelete(index){
			var self = this;
			self.list.splice(index,'1');
			self.inputValue = '';
		},
		// 接入$emit多个参数的时候
		msgFun(data){
			var self = this;
			alert(
				"当前删除该项的index："+data.index+"。删除该项的内容："+data.content
			)
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