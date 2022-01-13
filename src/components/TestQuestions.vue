<template>
  <div>
    <div class="testList">
      <div class="testTop">
        <div class="testId">
          {{ 1 }}.
        </div>
        <div>
          <div class="title">
            题目
          </div>
          <div>
            <!-- 判断题 -->
            <div
              class="judge"
              v-if="testType"
            >
              <el-form
                ref="form"
                :model="form"
              >
                <el-form-item label="">
                  <el-radio-group
                    v-model="form.resource"
                    class="judgeFlex"
                  >
                    <el-radio label="对" />
                    <el-radio label="错" />
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </div>
            <!-- 选择题/简答题 -->
            <div
              class="other"
              v-if="!testType"
            >
              选项/简答
            </div>
          </div>
        </div>
      </div>
      <div class="testBottom">
        <div>难度:{{ 0 }}</div>
        <div>题目编号:{{ 0 }}</div>
        <div>预习/作业:{{ 0 }}</div>
        <div>题目归属章节:{{ 0 }}</div>
        <div>题目来源:{{ 0 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testType: {
      type: Boolean,
      default: null
    }
  },
  data () {
    return {
      form: {
        resource: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.testList{
  width: 80%;
  display: flex;
  flex-direction: column;
  border: 1px solid #acacac8f;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 15px;
  font-size: 14px;
}
.testTop{
  display: flex;
  padding: 15px;
}
.testId{
  width: 20px;
}
.testBottom{
  background-color: #F4F4F4;
  padding: 5px 15px;
  color: #151515;
  font-size: 13px;
  border-bottom: 1px dashed #DADADA;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
}
.judgeFlex{
  display: flex;
  flex-direction: column;
}
.title{
  margin-bottom: 20px;
}

@media screen and (max-width : 650px) {
  .testBottom{
    display: flex;
    flex-direction: column;
  }
}
</style>
