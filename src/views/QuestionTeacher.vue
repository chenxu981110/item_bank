<template>
  <b-container>
    <!--title-->
    <b-row
      align-h="between"
      style="width:90%;margin:0 auto 30px;"
    >
      <router-link
        to="/Profile"
      >
        <div style="width: 40px;height: 40px;border-radius: 10px;text-align: center;line-height: 40px;background-color: #EFF3F6;">
          <i
            class="iconfont icon-zuojiantou"
            style="font-weight: 600;font-size: 15px;color: #303E65;"
          />
        </div>
      </router-link>
      <div style="display: flex;flex-direction: row;align-items: center;">
        <button
          type="button"
          @click="removeQuestion()"
          style="margin-right: 5px;outline: none;border: transparent;width: 40px;height: 40px;border-radius: 8px;text-align: center;line-height: 40px;background-color: #EFF3F6;"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
        <router-link
          to="#"
          style="width: 40px;height: 40px;border-radius: 8px;text-align: center;line-height: 40px;background-color: #EFF3F6;margin-right: 5px;"
        >
          <i
            class="iconfont icon-bianji1"
            style="font-weight: 600;font-size: 25px;color: #303E65;"
          />
        </router-link>
        <div
          style="width: 40px;height: 40px;border-radius: 8px;text-align: center;line-height: 40px;background-color:#C83D7627;"
        >
          <i
            class="iconfont icon-collection"
            style="color: #C83D76;font-size: 25px;"
          />
        </div>
      </div>
    </b-row>
    <!--content-->
    <b-row>
      <b-col cols="12">
        <div>
          <span>难度等级：</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>

</style>
