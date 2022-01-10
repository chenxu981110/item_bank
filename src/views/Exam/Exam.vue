<template>
  <div class="Exam">
    <TestHead />
    <div class="test">
      <div>一、判断题(每小题10.0分，共2题, 共 20.0 分)</div>
      <TestList />
      <div>二 、单选题(每小题12.0分, 共2题, 共 24.0 分)</div>
      <TestList />
      <div>三 、多选题(每小题20.0分，共1题, 共 20.0 分)</div>
      <TestList />
      <div>四 、作答题(共2题, 共 40.0 分)</div>
      <TestList />
    </div>
  </div>
</template>

<script>
import TestList from '../../components/TestQuestions.vue'
import TestHead from '../Exam/ExamHead.vue'
export default {
  components: {
    TestList,
    TestHead
  }
}
</script>

<style lang="less" scoped>
.test{
  padding-left: 30px;
  margin-top: 50px;
}
</style>
