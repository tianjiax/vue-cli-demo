<template>
	<div>
		<div  class="route-a-box">
			<router-link class="router-a" to="/demo/Rating">星级评分</router-link>
			<router-link class="router-a" to="/demo/TodoList">列表操作</router-link>
			<router-link class="router-a" to="/demo/resource">动态数据</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	
}
</script>

<style scoped>
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