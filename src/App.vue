<template>
  <div>
    <blog-head></blog-head>
    <router-view></router-view>
    <blog-foot></blog-foot>
    <to-top></to-top>
  </div>
</template>

<script>
// 导入头部导航
import BlogHead from '@/components/BlogNav.vue'

// 导入页尾
import BlogFoot from '@/components/BlogFoot.vue'

import ToTop from '@/components/ToTop.vue'

export default {
  components: {
    BlogHead,
    BlogFoot,
    ToTop
  }
}
</script>

<style lang='less'>
  *{
    padding: 0;
    margin: 0;
  }
  body{
    background-color: #eff0f2;
    font-family: "Arial", "Microsoft YaHei", "\9ED1\4F53", "\5B8B\4F53", sans-serif;
  }
</style>
