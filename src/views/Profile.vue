<template>
  <div
    class="Profile"
  >
    <b-container class="bv-example-row">
      <router-link to="/Home">
        <div style="width: 40px;height: 40px;border-radius: 10px;text-align: center;line-height: 40px;background-color: #EFF3F6;">
          <i
            class="iconfont icon-zuojiantou"
            style="font-weight: 600;font-size: 15px;color: #303E65;"
          />
        </div>
      </router-link>
      <!--头像-->
      <el-row style="margin-top:30px">
        <el-col :span="24">
          <div class="demo-basic--circle">
            <div
              class="block"
              style="text-align:center;"
            >
              <el-avatar
                :size="80"
                :src="circleUrl"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <!--姓名/职称-->
      <el-row style="margin-top:1px">
        <el-col
          :span="24"
          style="text-align:center"
        >
          <p id="username">
            {{ userName }}
          </p>
          <el-tag size="small">
            老师
          </el-tag>
        </el-col>
      </el-row>
      <!--content1-->
      <b-row>
        <b-col cols="12">
          <ul>
            <li
              v-for="(item,index) in items"
              :key="index"
            >
              <div
                style=" display: flex;flex-direction: row;align-items: center"
              >
                <div
                  class="icons"
                  :style="{ background:item.background }"
                >
                  <i
                    class="iconfont"
                    :class="item.iconClass"
                    :style="{ color:item.color,fontSize:item.fontSize +'px' }"
                  />
                </div>
                <div
                  style="display: flex;flex-direction: column;align-items: flex-start;"
                >
                  <span>{{ item.title }}</span>
                  <span>{{ item.content }}</span>
                </div>
              </div>
              <router-link
                :to="item.href"
                v-if="index > 1"
              >
                <i
                  class="iconfont icon-youjiantou"
                  style="font-size: 15px;color: #848892;"
                />
              </router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
      <div style="display: flex;flex-direction: row;align-items: center;width: 90%;margin: 10px auto;">
        <div style="width: calc((100% - 45px)/2);height: 1px;background-color: #EFF3F6;" />
        <span style="font-size: 12px;font-weight: 600;color: #151515;margin: 0px 5px;">更多</span>
        <div style="width: calc((100% - 45px)/2);height: 1px;background-color: #EFF3F6;" />
      </div>
      <!--content2-->
      <b-row>
        <b-col
          cols="12"
          v-for="(item,index) in inputs"
          :key="index"
        >
          <span>{{ item.spanText }}</span>
          <el-input
            v-model="item.inputContent"
            clearable
          />
        </b-col>
        <b-col cols="12">
          <span>简介</span>
          <el-input
            type="textarea"
            :rows="2"
            v-model="textarea"
          />
        </b-col>
      </b-row>
      <!--footer-->
      <b-row style="padding:20px 0px 50px">
        <b-col
          cols="12"
        >
          <div
            style="display: flex;flex-direction: row;justify-content: space-between;"
          >
            <!--保存-->
            <button
              type="button"
              id="save"
            >
              保存
            </button>
            <!--log out-->
            <div style="align-self: flex-start;">
              <router-link
                to="/"
                id="logout"
              >
                <div>
                  <i
                    class="iconfont icon-zuojiantou1"
                    style="font-size: 14px;color: #E5E8F0;"
                  />
                  <i
                    class="iconfont icon-zuojiantou1"
                    style="margin-left: -8px;color: #D6DCE9;font-size:14px;"
                  />
                </div>
                <span style="font-size: 14px;color: #A6B4CD;">退出登录</span>
                <img
                  src="../assets/home/头像.svg"
                  alt=""
                  style="width: 35px;height: 35px; border-radius: 50%;"
                >
              </router-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Profile',

  data () {
    return {
      textarea: '',
      circleUrl: require('../assets/home/头像.svg'),
      userName: '测试教师账号',
      items: [
        {
          iconClass: 'icon-dianhua',
          title: '电话',
          content: '17815602382',
          background: '#366AC927',
          color: '#366AC9',
          fontSize: 20,
          href: 'javascript:;'
        },
        {
          iconClass: 'icon-youxiang',
          title: '邮箱',
          content: '1845042363@qq.com',
          background: '#FF6A4F27',
          color: '#FF6A4F',
          fontSize: 18,
          href: 'javascript:;'
        },
        {
          iconClass: 'icon-xiugaimima',
          title: '修改密码',
          content: '',
          background: '#C83D7627',
          color: '#C83D76',
          fontSize: 23,
          href: '/ChangePassword'
        },
        {
          iconClass: 'icon-biaoqian',
          title: '我的标签',
          content: '点击查看',
          background: '#FFD45527',
          color: '#FFD455',
          fontSize: 20,
          href: 'javascript:;'
        }
      ],
      inputs: [
        {
          spanText: '教师号',
          inputContent: ''
        },
        {
          spanText: '学校',
          inputContent: ''
        },
        {
          spanText: '学院',
          inputContent: ''
        },
        {
          spanText: '专业',
          inputContent: ''
        },
        {
          spanText: '班级',
          inputContent: ''
        }
      ]
    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>
<style lang="less" scoped>
#username{
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
}
.el-tag{
    width: 50px;
    height: 24px;
    border: 1px solid #F3B24C;
    border-radius: 25px;
    background-color: transparent;
    color: #F3B24C;
}
.icons{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    margin-right: 15px;
}
li{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  span:first-child{
    font-size: 15px;
    color: #303E65;
    font-weight: 600;
  }
  span:nth-child(2){
    color: #848892;
    font-size: 13px;
    }
}
/deep/.el-input__inner,/deep/.el-textarea__inner{
    width: 100%;
    height: 40px;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color: #EFF3F6;
    padding: 0px 10px;
    margin: 5px 0px;
}
/deep/.el-textarea__inner{
  height: 200px;
}
#save{
  background-color: #3892DF;
  color: #fff;
  padding: 3px 10px;
  letter-spacing: 1px;
  border-radius: 4px;
  font-size: 14px;
  margin: 10px 5px;
  outline: none;
  border: none;
}
#logout{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  box-shadow:0px 0px 15px 2px #DAE0E9;
  height:48px;
  align-items: center;
  border-radius: 55px;
  padding: 0px 10px;
  text-decoration: none;
}
</style>
