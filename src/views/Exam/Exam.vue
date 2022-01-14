<template>
  <div class="Exam">
    <TestHead />
    <TestList />
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

  }

}
</script>

<style lang="less" scoped>

</style>
