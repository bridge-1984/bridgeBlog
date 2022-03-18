<template>
  <div class="search-container">
    <div class="content">
      <el-input placeholder="请输入关键词" size="small" class="search-input" v-model="keyword"></el-input>
      <el-button type="primary" icon="el-icon-search" size="small" @click="search" >搜索</el-button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search () {
      this.$router.push({ path: '/list/' + this.keyword, query: { search: 'true' } }).catch(err => {
        console.log('已显示当前搜索结果，请勿重复点击', err)
      })
    }
  }

}
</script>

<style lang='less' scoped>
  .search-container{
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #FFF;
    text-align: center;
    margin-bottom: 20px;

    .content{
      height: 30px;
      vertical-align: middle;

      .search-input{
        width: 60%;
        padding-right: 10px;
      }
    }

  }
</style>
