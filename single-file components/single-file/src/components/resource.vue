<template>
	<div>
		<button @click="getData()">获取数据</button>
		<div class="resource-li" v-for="item in souceArr">
			{{ item.title }}
		</div>
	</div>
</template>

<script>
export default{
	name:'resource-ul',
	data(){
		return {
			souceArr:[]
		}
	},
	methods:{
		getData(){
			var self = this;
			self.$http.get('/api/posts').then(response => {
 
    		// get body data
		    self.souceArr = response.data;
		  }, response => {
		    // error callback
		  });
		}
	}
	
}	
</script>

<style>
.resource-li{
	padding: 0.10rem;
	border-bottom: 0.01rem solid #ccc;
}	
button{
	font-size: 0.24rem;
	padding: 0 0.2rem
}
</style>