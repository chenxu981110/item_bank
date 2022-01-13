<template>
  <b-container>
    <!--title-->
    <b-row
      align-h="between"
      style="width:90%;margin:0 auto 30px;"
    >
      <router-link
        to="/Profile"
      >
        <div style="width: 40px;height: 40px;border-radius: 10px;text-align: center;line-height: 40px;background-color: #EFF3F6;">
          <i
            class="iconfont icon-zuojiantou"
            style="font-weight: 600;font-size: 15px;color: #303E65;"
          />
        </div>
      </router-link>
      <div style="display: flex;flex-direction: row;align-items: center;">
        <button
          type="button"
          @click="removeQuestion()"
          style="margin-right: 5px;outline: none;border: transparent;width: 40px;height: 40px;border-radius: 8px;text-align: center;line-height: 40px;background-color: #EFF3F6;"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
        <router-link
          to="#"
          style="width: 40px;height: 40px;border-radius: 8px;text-align: center;line-height: 40px;background-color: #EFF3F6;margin-right: 5px;"
        >
          <i
            class="iconfont icon-bianji1"
            style="font-weight: 600;font-size: 25px;color: #303E65;"
          />
        </router-link>
        <div
          style="width: 40px;height: 40px;border-radius: 8px;text-align: center;line-height: 40px;background-color:#C83D7627;"
        >
          <i
            class="iconfont icon-collection"
            style="color: #C83D76;font-size: 25px;"
          />
        </div>
      </div>
    </b-row>
    <!--content-->
    <b-row>
      <b-col cols="12">
        <p>难度等级：{{ 0 }}</p>
        <p>题目编号：{{ 0 }}</p>
        <p>预习/作业：{{ 0 }}</p>
        <p>题目归属章节：{{ 0 }}</p>
        <p>题目来源：{{ 0 }}</p>
        <div
          class="qid"
        >
          <span>第<em>{{ 1 }}</em>题</span>
        </div>
        <!--question-->
        <div class="qContent">
          题目内容
        </div>
        <!--answer-->
        <div class="aContent">
          <span style="letter-spacing: 1px;font-size: 14px;color: #ACACAC;">答案:
            <strong
              style="margin-left: 15px;font-size: 16px;color: #51CB65;"
            > A</strong>
          </span>
        </div>
        <!--analysis-->
        <div class="sContent">
          <p>解析：</p>
          <span>解析内容</span>
        </div>
        <!--tagsContent-->
        <div style="display: flex;flex-direction: row;align-items: center;width: 100%;margin:15px auto 0px;">
          <div style="width: calc((100% - 45px)/2);height: 1px;background-color: #EFF3F6;" />
          <span style="font-size: 12px;font-weight: 600;color: #151515;margin: 0px 5px;">标签</span>
          <div style="width: calc((100% - 45px)/2);height: 1px;background-color: #EFF3F6;" />
        </div>
        <div style="display: flex;flex-direction: row;align-items: center;flex-wrap:wrap">
          <div
            v-for="(item,index) in tags"
            :key="index"
            class="tags"
          >
            <span>{{ item.tagName }}</span>
          </div>
        </div>
        <!--note-->
        <div
          class="qid"
          style="margin-top:10px"
        >
          笔记
        </div>
        <FreeResponseQuestion>
          图片笔记
          <template #content>
            <textarea
              placeholder="文字笔记"
            />
          </template>
        </FreeResponseQuestion>
        <button
          id="save"
          type="button"
          @click="save()"
        >
          保存笔记
        </button>
        <div style="clear:both" />
      </b-col>
    </b-row>
    <!--Students' feedback-->
    <b-row>
      <b-col cols="12">
        <div class="qid">
          学生反馈
        </div>
        <div
          class="feedbacks"
          v-for="(item,index) in feedbacks"
          :key="index"
        >
          <p>提交人:{{ item.person }}</p>
          <p>提交时间：{{ item.datetime }}</p>
          <!--文字笔记-->
          <div
            class="feedback_content"
          >
            {{ item.textNote }}
          </div>
          <!--图片笔记-->
          <div
            class="feedback_content"
          >
            <p>图片笔记</p>
            {{ item.photoNote }}
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import FreeResponseQuestion from '../components/FreeResponseQuestion.vue'
export default {
  components: {
    FreeResponseQuestion
  },
  data () {
    return {
      tags: [
        { tagName: '标签1' },
        { tagName: '标签2' },
        { tagName: '标签3' },
        { tagName: '标签4' },
        { tagName: '标签5' }
      ],
      feedbacks: [
        {
          person: 'John',
          datetime: '2022/1/13',
          textNote: '文字笔记',
          photoNote: ''
        },
        {
          person: 'mike',
          datetime: '2022/1/13',
          textNote: '文字笔记',
          photoNote: ''

        }
      ]
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.qid{
  background-color: #eff3f6;
  color: black;
  padding: 3px 10px;
  letter-spacing: 1px;
  border-radius: 4px;
  width:fit-content;
  height: 30px;
  margin-bottom: 15px;
}
.sContent,.qContent{
  border: 1px solid #acacac8f;
  border-radius: 8px;
  width: 100%;
  padding: 15px;
}
.aContent{
  margin: 15px 0px;
  padding:5px 10px;
  border-radius: 8px;
  background-color: #F4F4F4;
  width: fit-content;
}
.tags{
  background: #505ED027;
  color: #505ED0;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;
  width: fit-content;

}
#save{
  background-color:#3892DF;
  color: #fff;
  padding: 3px 10px;
  letter-spacing: 1px;
  border-radius: 4px;
  font-size: 14px;
  margin: 10px 0px;
  outline: none;
  border: none;
  float: right;
}
.feedback_content{
  background-color: #fff;
  width: 100%;
  padding:15px;
   margin: 0 auto;
   height: auto;
   overflow-y: scroll;
   word-wrap:break-word;
}
.feedbacks{
  margin:20px 0px;
  width: 100%;
  border: 1px solid #acacac8f;
  border-radius: 8px;
  padding: 10px;
}
</style>
