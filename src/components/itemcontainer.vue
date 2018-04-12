<template>
  	<section>
    	<header class="top_tips">
    		<span class="num_tip" v-if="fatherComponent == 'home'">渲染成功</span>
    		<span class="num_tip" v-if="fatherComponent == 'item'">题目</span>
    	</header>
    	<div v-if="fatherComponent == 'home'" >
			<h2>success</h2>
    		<router-link to="item" >111</router-link>
    	</div>
    	<div v-if="fatherComponent == 'item'" >
			<h2>222</h2>
    	</div>
  	</section>
</template>

<script>
export default {
	name: 'itemcontainer',
	data() {
		return {
			itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
		}
	},
  	props:['fatherComponent'],
  	
}
</script>

<style>
	
</style>

