<template>
  <div class="rightNav-container">
    <search-div></search-div>
    <tag-list></tag-list>
  </div>
</template>

<script>
import SearchDiv from '@/components/SearchDiv.vue'
import TagList from './TagList.vue'
export default {
  components: {
    SearchDiv,
    TagList
  }
}
</script>

<style lang='less' scoped>
  .rightNav-container{
    float: right;
    width: 30%;

  }
</style>
