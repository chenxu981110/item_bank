<template>
  <b-row>
    <b-col cols="12">
      <textarea
        name=""
        id=""
        placeholder="请填写题干内容"
      />
    </b-col>
    <b-col>
      <div id="answer">
        <span style="letter-spacing: 1px;font-size: 14px;color: #ACACAC;">答案</span>
        <select
          name=""
          id=""
        >
          <option value="true">
            对
          </option>
          <option value="false">
            错
          </option>
        </select>
      </div>
    </b-col>
    <b-col cols="12">
      <textarea
        name=""
        id=""
        placeholder="文字解析"
      />
    </b-col>
  </b-row>
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
textarea{
    outline: none;
    border: none;
    background-color: #EFF3F6;
    border-radius: 8px;
    padding: 15px;
    height: 218px;
    overflow-y: scroll;
    border: 1px solid #acacac8f;
    width: 100%;
}
textarea::placeholder{
  color: #ACACAC;
  font-size: 14px;
}
#answer{
  width: 134px;
  background-color: #EFF3F6;
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid #acacac8f;
  margin: 15px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
select{
    outline: none;
    border: none;
    color: #151515;
    width: auto;
    background-color: transparent;
    font-size: 14px;

}

</style>
