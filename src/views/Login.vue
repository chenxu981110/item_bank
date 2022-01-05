<template>
  <div class="home">
    <el-row style="background:plum">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
      >
        <div
          class="grid-content"
        >
          <img
            src="../assets/login/login.svg"
            alt=""
            class="login"
          >
        </div>
      </el-col>
      <el-col
        :xs="20"
        :sm="24"
        :md="10"
        :offset="2"
        style="background:yellow"
      >
        <div
          class="grid-content"
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
        </div>
      </el-col>
    </el-row>
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
.home{
  background-color: orange;
  .grid-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
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
  }
}

</style>
