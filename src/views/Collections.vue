<template>
  <div class="Collections">
    <b-container>
      <b-row
        class="justify-content-center"
        align-v="center"
        style="background-color:plum:width:90%;margin:0 auto 30px;position: relative;"
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
        <span id="title">我的收藏</span>
      </b-row>
      <el-tabs
        stretch
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="作答题"
          name="first"
        >
          作答题
        </el-tab-pane>
        <el-tab-pane
          label="选择题"
          name="second"
        >
          选择题
        </el-tab-pane>
        <el-tab-pane
          label="判断题"
          name="third"
        >
          判断题
        </el-tab-pane>
      </el-tabs>
    </b-container>
  </div>
</template>
<script>
export default {

  data () {
    return {
      activeName: 'second'
    }
  },

  mounted () {

  },

  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="less" scoped>
#title{
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
}
.el-tabs__header {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
