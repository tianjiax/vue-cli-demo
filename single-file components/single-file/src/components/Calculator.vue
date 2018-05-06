<template>
	<div class="out-box">
		<div class="result">{{ result }}</div>
		<div class="enter">{{ enter === ""?0:enter}}</div>
		<div class="cal-box">
			<keyboard v-for="(item,index) in keys"  :value="item" :key="index" class="keyboard-class"></keyboard>
		</div>
	</div>
</template>

<script>
import keyboard from './keyboard.vue'

export default{
	data(){
		return {
			 keys:[
            'clear', '+', '-', '*',
            '7', '8', '9', '/',
            '4', '5', '6', '0',
            '1', '2', '3', '=']
		}

	},
	// 提过计算属性获取vuex的全局变量
	computed:{
		result(){
			return this.$store.state.result
		},
		enter(){
			return this.$store.state.enter
		}
	},
	// 子组件的定义输出标签
	components:{
		'keyboard':keyboard
	}
	
}
</script>

<style scoped lang="less">
.out-box{
	position: relative;
	height: 300px;
	width: 300px;
	margin: 0 auto
}
.result,.enter{
	text-align: right;
	width: 100%;
	word-wrap:break-word; 
	word-break:break-all;
}
.result{
	font-size: 40px;
	margin-top: 80px;
	min-height: 60px;
}
.enter{
	font-size: 20px;
	min-height: 24px
}
.cal-box{
	&:after{
		content: '';
		clear:both
	}
	.keyboard-class{
		box-sizing:border-box;
		-moz-box-sizing:border-box; /* Firefox */
		-webkit-box-sizing:border-box; /* Safari */
		border-bottom:1px solid #ddd;
		float: left;
		width: 25%;
		padding: 10px;
		cursor: pointer;
		&:active{
			color:#fff;
			background: #ccc;
		}
		&:first-child{
			color:red
		}
		&:last-child{
			color:green
		}
	}
}	
</style>