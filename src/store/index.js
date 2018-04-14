import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
//import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	itemNum: 1, // 第几题
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "1.山东省的省会是哪里？",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 1,
			"topic_id": 20,
			"answer_name": "潍坊",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 2,
			"topic_id": 20,
			"answer_name": "济南",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 3,
			"topic_id": 20,
			"answer_name": "菏泽",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 4,
			"topic_id": 20,
			"answer_name": "青岛",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "2.泰山位于哪个城市？",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 5,
			"topic_id": 21,
			"answer_name": "济南",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 6,
			"topic_id": 21,
			"answer_name": "淄博",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 7,
			"topic_id": 21,
			"answer_name": "泰安",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 8,
			"topic_id": 21,
			"answer_name": "烟台",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "3.以下不是直辖市的城市是？",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 9,
			"topic_id": 21,
			"answer_name": "上海",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 10,
			"topic_id": 21,
			"answer_name": "重庆",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 11,
			"topic_id": 21,
			"answer_name": "北京",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 12,
			"topic_id": 21,
			"answer_name": "石家庄",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "4.西湖位于杭州市的哪个区？",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 13,
			"topic_id": 21,
			"answer_name": "西湖区",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 14,
			"topic_id": 21,
			"answer_name": "拱墅区",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 15,
			"topic_id": 21,
			"answer_name": "下沙区",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 16,
			"topic_id": 21,
			"answer_name": "滨江区",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "5.上海又被叫做？",
		"active_id": 1,
		"topic_answer": [{
			"topic_answer_id": 17,
			"topic_id": 21,
			"answer_name": "雾都",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 18,
			"topic_id": 21,
			"answer_name": "魔都",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 19,
			"topic_id": 21,
			"answer_name": "水都",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "花都",
			"is_standard_answer": 0
		}]
	}],
	answerid: [], //答案id
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})