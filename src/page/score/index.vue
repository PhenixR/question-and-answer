<template>
  <div>
      <div class="score_container">
          <p class="your_score">{{score}}分!</p>
          <p>{{scoreTips}}</p>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'score',
  data(){
      return {
        score: 0,
        scoreTips:'',
        rightAnswer:[2, 7, 12, 13, 18],
        scoreTipsArr:['0分你认真的吗？','加油，差一点就0分了','看来你比20分的厉害一点点','恭喜你及格了','加油，差一点就满分了','满分！满分！']
      }
  },
  computed: mapState(['answerid']),
  created(){
       this.computedScore();
       this.getScoreTip();
  },
  methods: {
        //计算分数
        computedScore(){
            this.answerid.forEach((item, index) => {
                if (item == this.rightAnswer[index]) {
                    this.score += 20;
                }
            })
        },
        //根据分数显示提示
        getScoreTip: function (){
            if(this.score < 20) {
                this.scoreTips = this.scoreTipsArr[0];
                return
            }
            if(this.score < 40) {
                this.scoreTips = this.scoreTipsArr[1];
                return
            }
            if(this.score < 60) {
                this.scoreTips = this.scoreTipsArr[2];
                return
            }
            if(this.score < 80) {
                this.scoreTips = this.scoreTipsArr[3];
                return
            }
            if(this.score < 100) {
                this.scoreTips = this.scoreTipsArr[4];
            }
            else{
                this.scoreTips = this.scoreTipsArr[5];
            }
        }
    },
}
</script>

<style>
.your_score {
    font-size: 40px;
    font-weight: 500;
}
</style>


