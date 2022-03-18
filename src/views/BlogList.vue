<template>
  <div class="bloglist-container">
    <!-- <left-container></left-container>
     -->
    <router-view></router-view>
    <right-nav></right-nav>
  </div>
</template>

<script>
// import LeftContainer from './list/LeftContainer.vue'
import RightNav from './list/RightNav.vue'
export default {
  components: {
    // LeftContainer,
    RightNav
  }
}
</script>

<style lang='less' scoped>
  .bloglist-container{
    width: 80%;

    // 消除浮动带来的影响
    overflow: hidden;

    margin: 20px auto;
  }
</style>
