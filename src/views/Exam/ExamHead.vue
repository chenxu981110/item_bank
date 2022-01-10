<template>
  <div class="ExamHead">
    <!-- 头部图标 -->
    <div class="headFlex">
      <div>图标</div>
      <div>{{ headTxt }}</div>
      <div>图标</div>
    </div>

    <!-- 搜索框 -->
    <div class="search">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
        />
      </el-input>
    </div>

    <!-- 搜索框下面按钮 -->
    <div
      style="margin-top: 30px;"
      class="select"
    >
      <el-row
        :gutter="40"
        style="width: 100%;"
      >
        <el-col
          :md="5"
          :sm="10"
          :xs="10"
        >
          <el-dropdown>
            <el-button
              type="primary"
              class="selectColor"
            >
              预习/作业<i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col
          :md="5"
          :sm="10"
          :xs="10"
        >
          <el-dropdown>
            <el-button
              type="primary"
              class="selectColor"
            >
              章节<i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col
          :md="5"
          :sm="8"
          :xs="8"
        >
          <el-dropdown>
            <el-button
              type="primary"
              class="selectColor"
            >
              难度等级<i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col
          :md="5"
          :sm="8"
          :xs="8"
        >
          <el-dropdown>
            <el-button
              type="primary"
              class="selectColor"
            >
              是否收藏<i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col
          :md="4"
          :sm="8"
          :xs="8"
        >
          <el-button
            type="primary"
            style="position: relative; left: calc(50% - 10px); margin-top: 10px;"
          >
            筛选习题
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headTxt: '',
      input: ''
    }
  },
  created () {

  },
  methods: {

  },
  watch: {
    '$store.state.titType' () {
      this.headTxt = this.$store.state.titType
    }
  }
}
</script>

<style lang="less" scoped>
.headFlex{
    width: 100%;
    height: 40px;
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.search{
    width: 80%;
    margin: 0 auto;
}
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}

.select{
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    .selectColor {
        color: #ACACAC;
        background-color: white;
        border-color: rgb(158, 158, 158);
    }
}

.el-dropdown{
    left: calc(50% - 10px);
    margin-top: 10px;
}
</style>
