<template>
  <div class="Home">
    <b-container
      fluid
    >
      <!--title-->
      <b-row
        align-h="between"
        id="title"
      >
        <b-col
          cols="7"
        >
          <div class="flex_module">
            <a href="javascript:;"><i class="iconfont icon-zujuan-tianchong" /></a>
            <router-link to="/Collections">
              <i class="iconfont icon-collection" />
            </router-link>
            <a href="javascript:;"><i class="iconfont icon-xiaoxi" /></a>
          </div>
        </b-col>
        <b-col
          cols="5"
          style="text-align:right"
        >
          <router-link to="/Profile">
            <img
              src="../assets/home/头像.svg"
              alt="头像"
            >
          </router-link>
        </b-col>
      </b-row>
      <!--content-->
      <b-row>
        <b-col
          sm="12"
          md="4"
          style="padding:0px"
        >
          <!-- @click.native="toTest('判断题')" -->
          <router-link :to="{ name: 'Exam', params: { pageTitle: pageTitle[0] } }">
            <div style="height: 180px;display: flex;justify-content: center;align-items: center;">
              <a
                href="javascript:;"
                style="width: 80%;display: inline-block;"
              >
                <div style="width: 100%;height: 150px;background: linear-gradient(to right bottom,#0139BA,rgb(133, 178, 223));border-radius: 15px;position: relative;">
                  <div style="padding: 30px;display: flex;flex-direction: column;align-items: flex-start;">
                    <span
                      style="display: inline-block;color: #fff;font-size: 20px;
                                    letter-spacing:3px;font-family: '黑体';"
                    >判断题</span>
                    <span
                      style="color: #fff;opacity: 0.6;font-size: 13px;letter-spacing: 2px;"
                    >{{ judge_number }}题</span>
                  </div>
                  <div style="width: calc(80% - 69px);background:#fff ;height: 75px;position: absolute;bottom: 0px;right: 10px;z-index: 9999;border-top-left-radius: 15px;border-top-right-radius: 15px;opacity: 0.3;" />
                  <div style="width: calc(80% - 89px);background:#fff ;height: 110px;position: absolute;bottom: 0px;right: 0px;z-index: 9999;border-top-left-radius: 15px;opacity: 0.6;border-bottom-right-radius: 15px;" />
                  <div style="background: #fff;height: 8px;border-radius: 10px;position: absolute;right: 15px;bottom: 72px;width: calc(80% - 119px);z-index: 99999;" />
                  <div style="background: #fff;height: 8px;border-radius: 10px;position: absolute;right:95px;bottom: 52px;width: calc(80% - 199px);z-index: 99999;" />
                  <i
                    class="iconfont icon-icon-"
                    style="position: absolute;top: 78px;right: 15px;color: #fff;z-index: 99999;font-size: 50px;"
                  />
                </div>
              </a>
            </div>
          </router-link>
        </b-col>
        <b-col
          sm="12"
          md="4"
          style="padding:0px"
        >
          <!-- <router-link
            to="/Exam/other"
            @click.native="toTest('选择题')"
          > -->
          <router-link :to="{ name: 'Exam', params: { pageTitle: pageTitle[1] } }">
            <div style="height: 180px;display: flex;justify-content: center;align-items: center;">
              <a
                href="javascript:;"
                style="width: 80%;display: inline-block;"
              >
                <div style="width: 100%;height: 150px;background: linear-gradient(to right bottom,#F3B24C,#FFD455);border-radius: 15px;position: relative;">
                  <div style="padding: 30px;display: flex;flex-direction: column;align-items: flex-start;">
                    <span
                      style="display: inline-block;color: #fff;font-size: 20px;
                                    letter-spacing:3px;font-family: '黑体';"
                    >选择题</span>
                    <span style="color: #fff;opacity: 0.95;font-size: 13px;letter-spacing: 2px;">{{ choose_number }}题</span>
                  </div>
                  <div style="position: absolute;right: 0px;bottom: 0px;width: calc(80% - 69px);height: 110px;z-index: 99999;display: flex;flex-direction: row;justify-content: space-around;align-items: flex-end;padding: 0px 10px;">
                    <div style="background: #FFEEC7;height: 50px;width: calc((100% - 35px)/4);text-align: center;padding-top: 5px;border-top-left-radius: 5px;border-top-right-radius: 5px;font-weight: 600;color: #FFB53A;"><span>A</span></div>
                    <div style="background: #FFEEC7;height: 50px;width: calc((100% - 35px)/4);text-align: center;padding-top: 5px;border-top-left-radius: 5px;border-top-right-radius: 5px;font-weight: 600;color: #FFB53A;"><span>B</span></div>
                    <div style="background: #FFFAEE;height: 80px;width: calc((100% - 35px)/4);text-align: center;padding-top: 5px;border-top-left-radius: 5px;border-top-right-radius: 5px;font-weight: 600;color: #FFB742;"><span>C</span></div>
                    <div style="background: #FFE8A2;height: 50px;width: calc((100% - 35px)/4);text-align: center;padding-top: 5px;border-top-left-radius: 5px;border-top-right-radius: 5px;font-weight: 600;color: #FFB53A;"><span>D</span></div>
                  </div>
                </div>
              </a>
            </div>
          </router-link>
        </b-col>
        <b-col
          sm="12"
          md="4"
          style="padding:0px"
        >
          <!-- <router-link
            @click.native="toTest('作答题')"
            to="/Exam/other"
          > -->
          <router-link :to="{ name: 'Exam', params: { pageTitle: pageTitle[2] } }">
            <div style="height: 180px;display: flex;justify-content: center;align-items: center;">
              <a
                href="javascript:;"
                style="width: 80%;display: inline-block;"
              >
                <div style="width: 100%;height: 150px;background: linear-gradient(to right bottom,#FF5146,#FF8358);border-radius: 15px;position: relative;">
                  <div style="padding: 30px;display: flex;flex-direction: column;align-items: flex-start;">
                    <span
                      style="display: inline-block;color: #fff;font-size: 20px;
                                    letter-spacing:3px;font-family: '黑体';"
                    >作答题</span>
                    <span style="color: #fff;opacity: 0.95;font-size: 13px;letter-spacing: 2px;">{{ free_response }}题</span>
                  </div>
                  <div style="width: calc(80% - 69px);background:#FF8F74 ;height: 75px;position: absolute;bottom: 0px;right: 10px;z-index: 9999;border-top-left-radius: 15px;border-top-right-radius: 15px;" />
                  <div style="width: calc(80% - 89px);background:#FFC5B4 ;height: 110px;position: absolute;bottom: 0px;right: 0px;z-index: 9999;border-top-left-radius: 15px;border-bottom-right-radius: 15px;" />
                  <div style="background: #fff;height: 8px;border-radius: 10px;position: absolute;right: 15px;bottom: 72px;width: calc(80% - 119px);z-index: 99999;" />
                  <div style="background: #fff;height: 8px;border-radius: 10px;position: absolute;right:35px;bottom: 52px;width: calc(80% - 139px);z-index: 99999;" />
                  <div style="background: #fff;height: 8px;border-radius: 10px;position: absolute;right: 75px;bottom: 32px;width: calc(80% - 179px);z-index: 99999;" />
                </div>
              </a>
            </div>
          </router-link>
        </b-col>
      </b-row>
      <!--footer-->
      <b-row
        id="footer"
        align-h="end"
      >
        <a
          class="icoBg"
          href="javascript:;"
        >
          <input
            type="file"
            multiple
            style=" position: absolute; right: 0px; top: 0px; opacity: 0; z-index: 99; width: 45px; height: 45px"
            @change="updata"
          >
          <img
            class="img1"
            src="../assets/home/latex.svg"
            alt="latex"
          >
        </a>

        <a
          class="icoBg"
          href="javascript:;"
        >
          <input
            type="file"
            multiple
            style=" position: absolute; right: 0px; top: 0px; opacity: 0; z-index: 99; width: 45px; height: 45px"
            @change="updata"
          >
          <img
            class="img2"
            src="../assets/home/压缩包.svg"
            alt="压缩包"
          >
        </a>
        <router-link
          class="icoBg"
          to="/AddItems"
        >
          <i class="iconfont icon-daochu1024-29 icoAdd" />
        </router-link>
      </b-row>
    </b-container>
    <span class="fileinput-button ">
      <i
        class="fa fa-folder-open-o"
        aria-hidden="true"
      />

    </span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      pageTitle: ['判断题', '选择题', '作答题'],
      judge_number: '3',
      choose_number: '5',
      free_response: '260',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  mounted () {

  },
  methods: {
    toTest (type) {
      console.log('点击了')
      this.$store.commit('pushTitType', type)
    },
    updata (e) {
      const file = e.target.files[0]
      const param = new FormData() // 创建form对象
      param.append('file', file)// 通过append向form对象添加数据
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      } // 添加请求头
      this.$axios.post('http://127.0.0.1:8081/upload', param, config)
        .then(response => {
          console.log(response.data)
        })
    }
  }
}
</script>

<style lang="less" scoped>
#title{
    a{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    text-align: center;
    line-height: 45px;
    text-decoration: none;
  }
  a:first-child{
      background-color: #F05F4027;
      margin-right: 10px;
      i{
        color:#F05F40;
        font-size: 22px;
      }
  }
  a:nth-child(2){
      background-color: #C83D7627;
      margin-right: 10px;
      i{
        color:#C83D76;
        font-size: 23px;
      }
  }
  a:nth-child(3){
      background-color: #0D6efd27;
      i{
      font-size: 25px;
      color: #0d6dfdce;
      }
  }
  img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
.flex_module{
  display: flex;
  flex-direction: row;
  align-items: center;
}

#footer{
 a{
    margin-right: 10px;
    background-color: #0139BA27;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position:relative
 }
 a:first-child{
        img{
          width: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
    }
 a:nth-child(2){
        img{
          width: 25px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
    }
    a:nth-child(3){
        i{
         color:#0139BA;
         font-size: 30px;
         position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
    }
}
.fileinput-button {
 position: relative;
 display: inline-block;
 overflow: hidden;
}
.fileinput-button input {
 position: absolute;
 right: 0px;
 top: 0px;
 opacity: 0;
}
</style>
