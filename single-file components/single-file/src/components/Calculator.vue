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
	width: 300*2/100rem;
	margin: 10*2/100rem auto;
	border: 1*2/100rem solid #ddd;
	border-bottom: none
}
.result,.enter{
	text-align: right;
	word-wrap:break-word; 
	word-break:break-all;
	margin-right: 10*2/100rem;
}
.result{
	font-size: 40*2/100rem;
	margin-top: 20*2/100rem;
	min-height: 60*2/100rem;
}
.enter{
	font-size: 20*2/100rem;
	min-height: 24*2/100rem
}
.cal-box{
	&:after{
		content: '';
		clear:both;
		display: block
	}
	.keyboard-class{
		box-sizing:border-box;
		-moz-box-sizing:border-box; /* Firefox */
		-webkit-box-sizing:border-box; /* Safari */
		border-bottom:1*2/100rem solid #ddd;
		float: left;
		width: 25%;
		padding: 10*2/100rem;
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