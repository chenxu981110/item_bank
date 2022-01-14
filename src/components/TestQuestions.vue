<template>
  <b-container>
    <b-row
      v-for="(item,index) in questionsList"
      :key="index"
      class="questions"
    >
      <b-col cols="12">
        <div>
          <span>{{ index + 1 }}.</span>
          <span class="questionContent">{{ item.questionContent }}</span>
        </div>
        <!--判断题-->
        <div
          v-show="isShow"
          style="display: flex;flex-direction: column;align-items: flex-start;"
        >
          <div>
            <input
              type="radio"
              id="right"
              disabled
              checked
            >
            <label for="right">对</label>
          </div>
          <div>
            <input
              type="radio"
              id="wrong"
              disabled
            >
            <label for="wrong">错</label>
          </div>
        </div>
        <!--选择题-->
        <div>
          <p
            v-for="(option,optionIndex) in options"
            :key="optionIndex"
          >
            {{ option.optionContent }}
          </p>
        </div>
      </b-col>
      <!--属性-->
      <b-col
        cols="12"
        class="property"
      >
        <b-row>
          <b-col
            cols="12"
            xl="2"
          >
            <span>难度：{{ item.difficulty }}</span>
          </b-col>
          <b-col
            cols="12"
            xl="2"
          >
            <span>题目编号：{{ item.number }}</span>
          </b-col>
          <b-col
            cols="12"
            xl="2"
          >
            <span>预习/作业：{{ item.type }}</span>
          </b-col>
          <b-col
            cols="12"
            xl="2"
          >
            <span>题目归属章节：{{ item.chapter }}</span>
          </b-col>
          <b-col
            cols="12"
            xl="2"
          >
            <span>题目来源：{{ item.source }}</span>
          </b-col>
        </b-row>
      </b-col>
      <!--tags-->
      <div
        class="tags"
      >
        <span
          v-for="(tag,number) in tags"
          :key="number"
          class="tag"
        >{{ tag.tagName }}</span>
      </div>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'Profile',

  data () {
    return {
      isShow: false,
      questionsList: [
        {
          questionContent: '',
          difficulty: '0.1',
          number: '001',
          type: '预习',
          chapter: '第2章',
          source: '系统中添加'
        }
      ],
      tags: [
        {
          tagName: '物理'
        }
      ],
      options: [
        {
          optionContent: 'A.XXX'
        }, {
          optionContent: 'B.XXX'
        },
        {
          optionContent: 'C.XXX'
        }, {
          optionContent: 'D.XXX'
        }
      ]
    }
  },
  mounted () {

  },
  created () {
    this.a()
  },
  methods: {
    a () {
      if (this.$route.params.pageTitle === '判断题') {
        this.questionsList.questionContent = '判断题'
        console.log(this.questionsList.questionContent)
        this.isShow = true
      } else if (this.$route.params.pageTitle === '选择题') {
        this.questionsList.questionContent = '选择题'
        this.isShow = false
      } else if (this.$route.params.pageTitle === '作答题') {
        this.questionsList.questionContent = '作答题'
        this.isShow = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
label{
  margin-bottom: 0px;
}
.property{
    background-color: #F4F4F4;
    padding: 5px 15px;
    color: #151515;
    font-size: 13px;
    border-bottom: 1px dashed #DADADA;
    border-top: 1px solid #DADADA;
    margin: 0px;
}
.questions{
    margin: 15px auto;
    border: 1px solid #acacac8f;
    border-radius: 10px;
}
.tag{
  font-size: 14px;
  font-weight:500;
  padding:2px 10px;
  border-radius: 3px;
  margin:  5px;
  color: #308FF6;
  border: 1px solid #308FF6;
  width: fit-content;
}
.tags{
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
p{
  margin-bottom: 0px;
}
</style>
