<template>
  <!-- 我们在 HTML 中添加了一个<div>标签？这是因为我们还在根级别的<span>中添加了一个计数器，Vue.js 中的组件模板只接受一个根元素。如果你不遵守，会得到一个编译错误。 -->
  <div class="rating">
    <ul class="list">
		<!-- 循环输出，根据stars及maxStars的值来判定是否选中，添加changeStar事件来进行星级计算 -->
    	<li @click="changeStar(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" class="star">★</li>
    </ul>
    <!-- 动态绑定输出选中星级及总星级-->
    <span>{{ stars }} of {{ maxStars }}</span>
  </div>
</template>

<script>
export default{
	// 数据存放
	data(){
		return{
			stars:3,
			maxStars: 5
		} 
	},
	// 方法存放
	methods:{
		// 改变星级方法
		changeStar:function(e){
			// 让self=this，避免this指向出现问题
			var self = this;
			// 星级对于当前星级，也可以传参数为index+1计算
			self.stars = e;
		}
	}
}
</script>

<style scoped lang="less">
// 在webpack中默认配置。安装了less及less-loader，使用less编译
// scoped的作用仅仅是限定css的作用域，防止变量污染。
  .rating {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #a7a8a8;
    .list {
	  margin:0 auto;
	  -webkit-padding-start: 0px;
	  padding: 0;
	  list-style-type: none;
	}
	.list:hover .star {
	  color: #f3d23e;
	}
	.star {
	  display: inline-block;
	  cursor: pointer;
	  font-size:50px;
	}
	.star:hover ~ .star:not(.active) {
	  color: inherit;
	}
	.active {
	  color: #f3d23e;
	}
  }
  
</style>