<template>
  <div class="Exam">
    <TestHead />
    <div class="test">
      <TestList
        v-if="id === 'judge'"
        :test-type="judge"
      />
      <TestList
        v-if="id === 'other'"
        :test-type="other"
      />
    </div>
  </div>
</template>

<script>
import TestList from '../../components/TestQuestions.vue'
import TestHead from '../../components/ExamHead.vue'
export default {
  components: {
    TestList,
    TestHead
  },
  data () {
    return {
      id: '',
      judge: true,
      other: false
    }
  },
  created () {

  },
  mounted () {
    this.id = this.$route.params.id
  }

}
</script>

<style lang="less" scoped>
.test{
  padding-left: 30px;
  margin-top: 50px;
}
</style>
