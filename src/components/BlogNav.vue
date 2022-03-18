<template>
  <div class="blogNav-container">
    <div class="content">
    <!-- 顶部导航条 -->
    <div class="logo"><img src="@/assets/logo.png" alt=""></div>
<el-menu
  :default-active="this.$route.path"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#fff"
  active-text-color="#409EFF"
  :router=true
  >
  <el-menu-item index="/index">首页</el-menu-item>
  <el-menu-item index="/list/all">文章列表</el-menu-item>
  <el-menu-item index="/list/1" disabled>留言</el-menu-item>
  <el-menu-item index="/4"><a href="#" target="_blank">后台登陆</a></el-menu-item>
</el-menu>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .blogNav-container{
    height: 60px;
    background-color: #fff;
    text-align: center;
    .content{
      width: 80%;
      margin: 0 auto
    }
  }
  .el-menu{
    float: right;
  }
  .logo img{
    float: left;
    width: 60px;
    height: 60px;
  }
</style>
