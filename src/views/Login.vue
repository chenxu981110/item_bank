<template>
  <div class="home">
    <b-container>
      <b-row align-v="center">
        <b-col
          cols="12"
          md="6"
        >
          <img
            src="../assets/login/login.svg"
            alt=""
            class="login"
          >
        </b-col>
        <b-col
          cols="12"
          md="6"
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
          <el-button type="primary">
            登录
          </el-button>
          <a href="javascript:;">
            忘记密码？点此找回
          </a>
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
    margin: 10px 0px;
    width: 100%;
    outline: none;
    border: none;
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
      width: 100%;
      height: 45px;
      outline: none;
      border: none;
      border-radius: 10px;
      color: #fff;
      font-weight: 600;
      font-size: 15px;
      font-family: '黑体';
      letter-spacing: 3px;
      background-color: #366AC9;
      margin: 10px 0px;
      padding: 0px 15px;
    }
    a{
      text-decoration: none;
      border-bottom: 1px solid #366AC9;
    }
</style>
