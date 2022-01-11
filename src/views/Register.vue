<template>
  <div class="Register">
    <b-container>
      <b-row align-v="center">
        <b-col
          cols="12"
          md="6"
        >
          <img
            src="@/assets/login/login.svg"
            alt=""
            id="loginImg"
          >
        </b-col>
        <b-col
          cols="12"
          md="6"
          style="text-align:center"
        >
          <select v-model="selected">
            <option
              disabled
              value=""
            >
              请选择
            </option>
            <option>老师</option>
            <option>学生</option>
          </select>
          <input
            v-for="(item,index) in inputs"
            :key="index"
            :placeholder="item.placeholder"
            v-model="item.value"
            :type="item.type"
          >
          <button
            id="registered"
            @click="registered()"
          >
            注册
          </button>
          <div style="display: flex;flex-direction: row;align-items: center;width: 100%;margin: 10px auto;justify-content: center;">
            <div style="width: calc(( 80% - 20px )/2);height: 1px;background-color: #EFF3F6;" />
            <span style="font-size: 15px;font-weight: 600;">或</span>
            <div style="width: calc(( 80% - 20px )/2);height: 1px;background-color: #EFF3F6;" />
          </div>
          <router-link
            to="/"
            id="login"
          >
            登录
          </router-link>
          <span style="font-size:0.75rem;padding-bottom:50px">已有账户？<router-link
            style="color:#FF6A4F;text-direction:none"
            to="/"
          >马上登录</router-link></span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: '',
      inputs: [
        {
          placeholder: '用户名',
          value: '',
          type: 'text'
        },
        {
          placeholder: '姓',
          value: '',
          type: 'text'

        },
        {
          placeholder: '名',
          value: '',
          type: 'text'
        },
        {
          placeholder: 'E-mail',
          value: '',
          type: 'email'
        },
        {
          placeholder: '手机号',
          value: '',
          type: 'tel'

        },
        {
          placeholder: '密码',
          value: '',
          type: 'password'
        },
        {
          placeholder: '确认密码',
          value: '',
          type: 'password'
        }
      ]
    }
  },
  methods: {
    registered () {
      for (let i = 0; i < this.inputs.length - 1; i++) {
        console.log('button', this.inputs[i].value)
      }
      console.log('selected', this.selected)
    }
  }
}
</script>
<style lang="less" scoped>
   @media (max-width: 767px){
    #loginImg{
          width: 300px;
          height: 300px;
        }
   }
   @media (min-width: 767px){
      #loginImg {
          width: 80%;
          height: auto;
      }
    }
    select{
      background-color: #EFF3F6;
      height: 45px;
      outline: none;
      border: none;
      border-radius: 10px;
      padding: 0px 15px;
      width: 100%;
    }
    input{
    background-color: #EFF3F6;
    height: 45px;
    border-radius: 10px;
    margin: 20px auto;
    width: 100%;
    outline: none;
    border: none;
    display: block;
    padding: 0px 15px;
  }
  #registered{
    color: #fff;
    background-color: #366AC9;
     height: 45px;
    outline: none;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;
    font-family: '黑体';
    letter-spacing: 3px;
    width: 100%;
  }
  #login{
    background-color: #FF6A4F27;
    color: #FF6A4F;
    height: 45px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;
    font-family: '黑体';
    letter-spacing: 3px;
    text-decoration: none;
    text-align: center;
    line-height: 45px;
    width: 100%;
    display:block;
  }
</style>
