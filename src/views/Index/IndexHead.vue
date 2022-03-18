<template>
  <div class="head-container">
    <div class="header">
      <div class="box">
        <div class="title">BRID BLOG</div>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .header{
    // background: pink;
    position: relative;
    height: 220px;
    width: 100%;
    background-image: url('@/static/pic/nav.jpg');
    background-position: center;
    .box{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 99;
    }
    .title{
      font-family: lato, sans-serif;
      font-size: 3.5em;
      letter-spacing: 10px;
      margin-top: 0;
      margin-bottom: 0;
      margin-bottom: 20px;
    }
  }
</style>
