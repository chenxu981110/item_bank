<template>
  <div class="testList">
    <div class="testTop">
      <div class="testId">
        {{ 1 }}.
      </div>
      <div>
        <div>
          题目
        </div>
        <div>
          <div>选项/判断/简答</div>
          <div>选项/判断/简答</div>
          <div>选项/判断/简答</div>
          <div>选项/判断/简答</div>
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
</template>

<script>
export default {

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
</style>
