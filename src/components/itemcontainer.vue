<template>
  	<section>
    	<header class="top_tips">
    		<span class="num_tip" v-if="fatherComponent == 'home'">知识问答</span>
    		<span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    	</header>
    	<div v-if="fatherComponent == 'home'" class="home">
    		<router-link to="item" class="start">开始答题</router-link>
    	</div>
    	<div v-if="fatherComponent == 'item'" class="item">
			<div class="item_container">
				<p class="qusetion">{{itemDetail[itemNum-1].topic_name}}</p>
				<ul>
					<li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
						<span class="option_detial">{{item.answer_name}}</span>
					</li>
				</ul>
			</div>
			<button class="next" @click="nextItem" v-if="itemNum < itemDetail.length">下一题</button>
			<button class="submit" v-else @click="submitAnswer">提交</button>
    	</div>
  	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
  	computed: mapState([
	  	'itemNum', //第几题
  		'itemDetail', //题目详情
	]),
  	methods: {
  		...mapActions([
  			'addNum', 'initializeData',
  		]),
  		//点击下一题
  		nextItem(){
  			if (this.choosedNum !== null) {
	  			this.choosedNum = null;
	  			//保存答案, 题目索引加一，跳到下一题
	  			this.addNum(this.choosedId)
  			}else{
  				alert('您还没有选择答案哦')
  			}
  		},
  		//索引0-3对应答案A-B
	  	chooseType: type => {
	  		switch(type){
	  			case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
	  		}
	  	},
	  	//选中的答案信息
	  	choosed(type,id){
	  		this.choosedNum = type;
	  		this.choosedId = id;
	  	},
	  	//到达最后一题，交卷，请空定时器，跳转分数页面
	  	submitAnswer(){
	  		if (this.choosedNum !== null) {
	  			this.addNum(this.choosedId)
	  			this.$router.push('score')
  			}else{
  				alert('您还没有选择答案哦')
  			}
	  	},
	},
	created(){
		//初始化信息
		this.initializeData();
	}
}
</script>

<style>
ul {
	list-style-type: none;
}
button {
	width: 100px;
	margin-left: 20px;
}
.top_tips {
	display: flex;
	justify-content: center;

}
.num_tip {
	font-size: 20px;
	font-weight: 500;
}
.home {
	display: flex;
	justify-content: center;
}
.item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 75px;
}
.start {
	cursor:pointer;
	font-size: 20px;
	font-weight: 500;
}
.item_list {
	cursor:pointer;
}
.next {
	cursor:pointer;
}
.submit {
	cursor:pointer;
}
.has_choosed {
	color: rgb(233, 210, 7);
}
	
</style>

