<template>
	<div>
		<div class="resource-li" v-for="item in list">
			{{ item.created_at }}
		</div>
		<!-- 输出加载中状态 -->
	    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
	    	<!-- slot自定义了当没有更多数据时的提示内容。 -->
			<span slot="no-more">
		    已经到底了
		  	</span>
	    </infinite-loading>
	</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
const api = 'http://hn.algolia.com/api/v1/search_by_date?tags=story';
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    onInfinite() {
      var self = this;
      // 利用resource获取数据
      self.$http.get(api,{
        params: {
        	// 穿参数进行获取对应分页数据
          	page: this.list.length / 20 + 1
        }
      }).then(res => {
		if (res.data.hits.length) {
			// 获取到数组就行合并
	        this.list = this.list.concat(res.data.hits);
	        // 传递绑定让其加载出加载中状态
	        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
	        // 限制加载到第四页不在加载，可以取消打到更多加载的效果
	        if (this.list.length / 20 === 4) {
	          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
	        }
        } else {
        	// 现在已经没有更多数据可以加载了
          	this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        }

	  }, res => {
	    // error callback
	  });
    }
  },
  components: {
  	// 组件定义
    InfiniteLoading
  }
};
</script>

<style>
.resource-li{
	padding: 5px;
	border-bottom: 1px solid #ccc
}	
</style>