<template>
  <div class="AddItems">
    <b-container>
      <!--title-->
      <b-row
        class="justify-content-center"
        align-v="center"
        style="width:90%;margin:0 auto 30px;position: relative;"
      >
        <router-link
          to="/Home"
          style="position: absolute;left:0px"
        >
          <div style="width: 40px;height: 40px;border-radius: 10px;text-align: center;line-height: 40px;background-color: #EFF3F6;">
            <i
              class="iconfont icon-zuojiantou"
              style="font-weight: 600;font-size: 15px;color: #303E65;"
            />
          </div>
        </router-link>
        <span id="title">添加试题</span>
      </b-row>
      <b-row align-h="between">
        <b-col
          cols="6"
          xl="2"
        >
          <select
            name=""
            id=""
            v-model="selected"
            style="width:100%"
            @change="type()"
          >
            <option value="作答题">
              作答题
            </option>
            <option value="判断题">
              判断题
            </option>
            <option value="单选">
              选择题(单选)
            </option>
            <option value="多选">
              选择题(多选)
            </option>
          </select>
        </b-col>
        <b-col
          cols="6"
          xl="2"
        >
          <div style="display: flex;flex-direction: row;align-items: center;">
            <span>难度等级&nbsp;</span>
            <select
              name=""
              id=""
            >
              <option value="">
                0.1
              </option>
              <option value="">
                0.2
              </option>
              <option value="">
                0.3
              </option>
              <option value="">
                0.4
              </option>
              <option value="">
                0.5
              </option>
              <option value="">
                0.6
              </option>
              <option value="">
                0.7
              </option>
              <option value="">
                0.8
              </option>
              <option value="">
                0.9
              </option>
              <option value="">
                1.0
              </option>
            </select>
          </div>
        </b-col>
        <b-col
          cols="6"
          xl="2"
        >
          <select
            name=""
            id=""
            style="width:100%"
          >
            <option value="">
              预习
            </option>
            <option value="">
              作业
            </option>
          </select>
        </b-col>
        <b-col
          cols="6"
          xl="2"
        >
          <div style="display: flex;flex-direction: row;align-items: center;">
            <span>第&nbsp;</span>
            <select
              name=""
              id=""
            >
              <option value="">
                1
              </option>
              <option value="">
                2
              </option>
              <option value="">
                3
              </option>
              <option value="">
                4
              </option>
              <option value="">
                5
              </option>
              <option value="">
                6
              </option>
              <option value="">
                7
              </option>
              <option value="">
                8
              </option>
              <option value="">
                9
              </option>
              <option value="">
                10
              </option>
            </select>
            <span>&nbsp;章</span>
          </div>
        </b-col>
        <b-col
          cols="12"
          xl="2"
        >
          <input
            type="text"
            placeholder="请填写题目编号"
          >
        </b-col>
      </b-row>
      <TrueFalseQuestion v-show="selected === '判断题'" />
      <FreeResponseQuestion v-show="selected === '作答题'">
        上传题干图片
        <template #content>
          <textarea
            placeholder="文字题干"
          />
        </template>
      </FreeResponseQuestion>
      <FreeResponseQuestion v-show="selected === '作答题'">
        上传解析图片
        <template #content>
          <textarea
            placeholder="文字解析"
          />
        </template>
      </FreeResponseQuestion>
      <ChoiceQuestion v-show="selected === '单选' |selected === '多选'" />
      <!--标签-->
      <div style="display: flex;flex-direction: row;align-items: center;width: 100%;margin: 10px auto;">
        <div style="width: calc((100% - 45px)/2);height: 1px;background-color: #EFF3F6;" />
        <span style="font-size: 12px;font-weight: 600;color: #151515;margin: 0px 5px;">标签</span>
        <div style="width: calc((100% - 45px)/2);height: 1px;background-color: #EFF3F6;" />
      </div>
      <!--已有标签-->
      <b-row>
        <div
          v-for="(item,index) in existing_label"
          :key="index"
          style="background: #505ED027;color: #505ED0;width:auto;height: 30px;padding: 5px 10px;display: flex;flex-direction: row;align-items: center;border-radius: 5px;margin:5px;"
        >
          <input
            type="checkbox"
            :id="'checkbox'+ index"
          >
          <label for="'checkbox'+ index">{{ existing_label[index] }}</label>
        </div>
      </b-row>
      <!--添加标签-->
      <b-row class="edit_input">
        <input
          type="text"
          placeholder="添加标签"
          style="outline: none;width: calc(100% - 40px);border: none;background: transparent;"
          v-model="tagContent"
        >
        <i
          @click="addTag()"
          class="iconfont icon-gouxuan"
          style="font-size: 25px;color: #3892DF;"
        />
      </b-row>
      <!--标签区域-->
      <b-row>
        <b-col cols="12">
          <div style="display: flex;flex-direction: row;align-items: center;flex-wrap: wrap;">
            <div
              v-for="(item,index) in added_label"
              :key="index"
              style="background: #505ED027;color: #505ED0;width:auto;height: 30px;padding: 5px 0px 5px 10px;display: flex;flex-direction: row;align-items: center;border-radius: 5px;margin:5px;"
            >
              <span style="font-size: 14px;font-weight: 600;color: #505ED0;">{{ added_label[index] }}</span>
              <div
                style="margin-left: 5px;padding:  0px 10px;border-left: 1px solid #EFF3F6;"
                type="button"
                @click="removeTag(index)"
              >
                <i
                  class="iconfont icon-cha"
                  style="font-size: 12px;"
                />
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!--提交-->
      <button
        type="button"
        style="background-color: rgb(56, 146, 223); color: rgb(255, 255, 255); padding: 3px 10px; letter-spacing: 1px; border-radius: 4px; font-size: 14px; margin: 10px 5px 50px; outline: none; border: none; float:right;"
      >
        提交
      </button>
      <div style="clear:both" />
    </b-container>
  </div>
</template>
<script>
import TrueFalseQuestion from '../components/TrueFalseQuestion.vue'
import FreeResponseQuestion from '../components/FreeResponseQuestion.vue'
import ChoiceQuestion from '../components/ChoiceQuestion.vue'
export default {
  components: {
    TrueFalseQuestion,
    FreeResponseQuestion,
    ChoiceQuestion

  },
  data () {
    return {
      selected: '作答题',
      existing_label: [],
      tagContent: '',
      added_label: []
    }
  },

  mounted () {

  },

  methods: {
    type () {
      console.log(this.selected)
    },
    addTag () {
      this.added_label.push(this.tagContent)
      console.log(this.added_label)
    },
    removeTag (index) {
      this.added_label.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
input,select{
  background-color: #EFF3F6;
  border: 1px solid #acacac8f;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 5px 0px;
}
select{
  width: auto;
  color: #ACACAC;
  font-size: 14px;
}
input{
  width: 100%;
}
input::placeholder{
  color: #ACACAC;
  font-size: 14px;
}
span{
  letter-spacing: 1px;
  font-size: 14px;
  color: #151515;
}
#title{
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
}
.edit_input {
    width: 100%;
    height: 40px;
    border-radius: 15px;
    background-color: #EFF3F6;
    padding: 0px 10px;
    margin: 5px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>
