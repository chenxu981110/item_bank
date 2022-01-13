<template>
  <b-row style="margin-top:15px;">
    <b-col cols="12">
      <!--title-->
      <ul class="tab">
        <li
          v-for="(item,index) in tabs"
          :key="index"
          @click="changeTab(index)"
          :class="{active:current === index}"
        >
          <i
            class="iconfont"
            :class="item.className"
            style="font-size: 20px;"
          />
        </li>
      </ul>
      <!--content-->
      <div
        v-show="current === 0"
        style="background-color: #fff;border: 1px solid #acacac8f;
                        border-radius: 8px;width: 100%;padding:15px; margin: 0 auto;height: 218px;overflow-y: scroll;"
      >
        <div style="width: 100%;">
          <div>
            <span style=" color: gray;font-size: 13.5px;">
              <slot />
            </span>
            <!--待上传列表-->
            <div
              id="question_thumbnail_gallery"
              class="row"
            >
              <div
                onclick="upload_question_photos()"
                class="col-4"
                style="padding-right: 0px; height: 97.828px;"
                id="add_images"
              >
                <div style="background-color: #EFF3F6;width: 100%;height: 100%;position: relative;margin: 5px;">
                  <i
                    class="iconfont icon-jiahao1"
                    style="font-size: 45px;color: gray;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-show="current === 1"
        style="width: 100%;"
      >
        <slot name="content" />
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {

  data () {
    return {
      current: 0,
      tabs: [
        {
          className: 'icon-xiangji'
        },
        {
          className: 'icon-24gl-fileText'

        }

      ]
    }
  },

  mounted () {

  },

  methods: {
    changeTab (index) {
      this.current = index
    }
  }
}
</script>
<style lang="less" scoped>
textarea{
   outline: none;
   border: none;
   background-color: #EFF3F6
   ;border-radius: 8px;
   padding: 15px;
   width: 100%;
   height: 218px;
   overflow-y: scroll;
   border: 1px solid #acacac8f;
}
textarea::placeholder{
  color: #ACACAC;
  font-size: 14px;
}
.tab{
  list-style: none;
  padding-left: 20px;
}
.tab li{
  float: left;
  width: 38px;
  height: 30px;
  text-align: center;
}
.active{
  border: 1px solid #acacac8f;
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #EFF3F6;
}
</style>
