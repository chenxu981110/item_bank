<template>
  <b-row>
    <!--题干-->
    <b-col cols="12">
      <textarea
        name=""
        id=""
        placeholder="请填写题干内容"
      />
    </b-col>
    <!--答案选项-->
    <b-col cols="12">
      <div
        v-for="(item,index) in answers"
        :key="index"
        style="display:flex;flex-direction: row;align-items: center;width: 100%;margin: 10px 0px;"
      >
        <div style="width: 30px; height: 30px; color: white; background-color:#3892DF; text-align: center; line-height: 30px; margin-right: 10px; border-radius: 50%; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);">
          <span>{{ item.options }}</span>
        </div>
        <input
          type="text"
          :value="item.value"
          style="width: calc(100% - 40px);border: none;outline: none;background-color: #EFF3F6;border: 1px solid #acacac8f;border-radius: 8px;height: 40px;padding-left: 20px;"
        >
      </div>
      <div style="display: flex;flex-direction: row;align-items: center;">
        <!--add_answer-->
        <div
          style="width: 30px; height: 30px;background-color:#3892DF;border-radius: 50%; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2); position: relative;"
          @click="add_answer()"
        >
          <i
            class="iconfont icon-icon-test"
            style="color: #fff;font-size: 20px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
          />
        </div>
        <!--remove_answer-->
        <div
          style="width: 30px; height: 30px;background-color:#3892DF;border-radius: 50%; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);position: relative;margin-left:10px"
          v-show="answers.length>4"
          @click="remove_answer()"
        >
          <img
            src="../assets/AddItems/remove.svg"
            alt=""
            style="width:20px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
          >
        </div>
      </div>
    </b-col>
    <!--答案-->
    <b-col cols="12">
      <div style="background-color: #EFF3F6;padding: 5px 15px;border-radius: 5px;border: 1px solid #acacac8f;width: 134px;margin:15px 0px; display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
        <span>答案：</span>
        <select v-model="selected">
          <option
            v-for="(item,index) in options"
            :key="index"
          >
            {{ options[index] }}
          </option>
        </select>
      </div>
    </b-col>
    <!--解析-->
    <b-col
      cols="12"
      style="margin-top:10px"
    >
      <textarea
        name=""
        id=""
        placeholder="文字解析"
      />
    </b-col>
  </b-row>
</template>
<script>
export default {

  data () {
    return {
      selected: 'A',
      options: ['A', 'B', 'C', 'D'],
      answers: [
        {
          options: 'A',
          value: ''
        },
        {
          options: 'B',
          value: ''
        },
        {
          options: 'C',
          value: ''
        },
        {
          options: 'D',
          value: ''
        }
      ]
    }
  },

  mounted () {

  },

  methods: {
    add_answer () {
      if (this.answers.length < 26) {
        this.options.push(String.fromCharCode(this.answers.length + 65))
        console.log(this.options)
        this.answers.push({ options: '', value: '' })
        console.log('answers', this.answers)
        this.answers[this.answers.length - 1].options = this.options[this.answers.length - 1]
      } else {
        alert('没有更多选项了！')
      }

      // if (this.answers.length < 26) {
      //   console.log('this.answers', this.answers)
      //   // this.answers.push(String.fromCharCode(arr.length + 65))
      //   // return console.log(arr)
      // } else {
      //   alert('没有更多字母了')
      // }
    },
    remove_answer () {
      this.answers.splice(this.answers.length - 1, 1)
      this.options.splice(this.options.length - 1, 1)
    }
  }
}
</script>
<style lang="less" scoped>
textarea{
    outline: none;
    border: none;
    background-color: #EFF3F6;
    border-radius: 8px;
    padding: 15px;
    height: 218px;
    overflow-y: scroll;
    border: 1px solid #acacac8f;
    width: 100%;
}
textarea::placeholder{
  color: #ACACAC;
  font-size: 14px;

}
select{
  background-color: transparent;
  outline: none;
  border: none;
}
</style>
