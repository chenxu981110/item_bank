<template>
  <div class="Tags">
    <b-container>
      <b-row
        class="justify-content-center"
        align-v="center"
        style="background-color:plum:width:90%;margin:0 auto 30px;position: relative;"
      >
        <router-link
          to="/Profile"
          style="position: absolute;left:0px"
        >
          <div style="width: 40px;height: 40px;border-radius: 10px;text-align: center;line-height: 40px;background-color: #EFF3F6;">
            <i
              class="iconfont icon-zuojiantou"
              style="font-weight: 600;font-size: 15px;color: #303E65;"
            />
          </div>
        </router-link>
        <span id="title">我的标签</span>
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
        <div
          v-for="(item,index) in added_label"
          :key="index"
          style="background: #505ED027;color: #505ED0;width:auto;height: 30px;padding: 5px 0px 5px 10px;display: flex;flex-direction: row;align-items: center;border-radius: 5px;margin:5px;"
        >
          <span style="font-size: 14px;font-weight: 600;">{{ added_label[index] }}</span>
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
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tagContent: '',
      added_label: []
    }
  },

  mounted () {

  },

  methods: {
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
