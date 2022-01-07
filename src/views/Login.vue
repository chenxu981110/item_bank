<template>
  <div class="home">
    <b-container>
      <b-row align-v="center">
        <b-col
          cols="12"
          md="6"
        >
          <img
            src="@/assets/login/login.svg"
            alt=""
            class="login"
          >
        </b-col>
        <b-col
          cols="12"
          md="6"
          style="padding:0px;"
        >
          <el-input
            placeholder="支持手机号/邮箱/用户名登录"
            v-model="username"
            clearable
            @input="head"
          />
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          />
          <el-button
            type="primary"
            id="login"
          >
            登录
          </el-button>
          <a href="javascript:;">
            忘记密码？点此找回
          </a>
          <div style="display: flex;flex-direction: row;align-items: center;width: 100%;margin: 10px auto;justify-content: center;">
            <div style="width: calc(( 80% - 20px )/2);height: 1px;background-color: #EFF3F6;" />
            <span style="font-size: 15px;font-weight: 600;">或</span>
            <div style="width: calc(( 80% - 20px )/2);height: 1px;background-color: #EFF3F6;" />
          </div>
          <el-button
            type="warning"
            id="registered"
          >
            注册
          </el-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    head () {
      console.log(this.input)
    }
  }
}
</script>

<style lang="less" scoped>
   @media (max-width: 767px){
    .login{
          width: 300px;
          height: 300px;
        }
   }
   @media (min-width: 767px){
      .login {
          width: 80%;
          height: auto;
      }
    }
    .el-input{
    background-color: #EFF3F6;
    height: 45px;
    border-radius: 10px;
    margin: 20px auto;
    width: 80%;
    outline: none;
    border: none;
    display: block;
      /deep/.el-input__inner{
      background-color: transparent;
      outline: none;
      border: none;
      height: 100%;
      width: calc(100% - 40px);
      padding: 0px 15px;
    }
  }
     /deep/.el-button{
      width: 80%;
      height: 45px;
      outline: none;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      font-size: 15px;
      font-family: '黑体';
      letter-spacing: 3px;
      margin: 10px auto;
      padding: 0px 15px;
      display: block;
    }
    a{
      text-decoration: underline;
      color: #366AC9;
      width: 80%;
      margin: 15px auto;
      display: block;
      text-align: right;
      font-size: 14px;
    }
    #registered{
    background-color: #FF6A4F27;
    color: #FF6A4F;
    }
    #login{
      color: #fff;
      background-color: #366AC9;
    }
</style>
