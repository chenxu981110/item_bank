<template>
  <div class="ChangePassword">
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
        <span id="title">修改密码</span>
      </b-row>
      <b-row class="justify-content-center">
        <b-col
          sm="12"
          md="8"
          xl="4"
          style="width:90%;padding:0px"
        >
          <div
            v-for="(item,index) in items"
            :key="index"
            style="background-color: #EFF3F6;height: 48px;border-radius: 15px;display: flex;flex-direction: row;
                        align-items: center;padding: 0px 10px;margin: 10px auto;justify-content: space-between;"
          >
            <input
              class="inputs"
              :type="[item.classShow ? activeType : errorType]"
              :placeholder="item.placeholder"
            >
            <div
              @click="showPassword(item)"
              style="width: 30px;height: 30px;border-radius: 50%;text-align: center;background-color: #E2E7F7;line-height:30px;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1),-2px -2px 2px rgba(255, 255, 255, 0.2);"
            >
              <i
                class="iconfont"
                :class="[item.classShow ? activeClass : errorClass]"
                style="font-size: 20px;"
              />
            </div>
          </div>
          <div style="text-align: right;">
            <button
              type="submit"
              id="submit"
            >
              保存更改
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Home',

  data () {
    return {
      activeClass: 'icon_yanjing',
      errorClass: 'icon_yanjing_bi',
      activeType: 'number',
      errorType: 'password',
      items: [
        {
          placeholder: '旧密码',
          classShow: false
        },
        {
          placeholder: '新密码',
          classShow: false
        },
        {
          placeholder: '新密码确认',
          classShow: false
        }
      ]
    }
  },

  mounted () {

  },

  methods: {
    showPassword (item) {
      item.classShow = !item.classShow
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
.inputs{
  background-color: transparent;
  outline: none;
  border: none;
}
#submit{
  background-color: #3892DF;
  color: #fff;
  padding: 5px 10px;
  letter-spacing: 1px;
  font-size: 14px;
  border: none;
  outline: none;
  margin: 10px 0px;
  border-radius: 10px;
}
</style>
