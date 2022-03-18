<template>
  <div class="taglist">
    <div class="head">
      <span>所有标签</span>
      <hr>
    </div>
    <div class="content">
      <span class="tag"  v-for="item in taglist" :key="item.id">
        <router-link :to="'/list/'+item.name"><el-tag :color="item.color" effect="dark" style="border-width: 0">{{ item.name }}</el-tag></router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { getAllTagAPI } from '@/api/articleApi.js'
export default {
  data () {
    return {
      taglist: []
    }
  },
  methods: {
    async initTagList () {
      const { data: res } = await getAllTagAPI()
      this.taglist = res.data
    }
  },
  created () {
    this.initTagList()
  }
}
</script>

<style lang='less' scoped>
  .taglist{
    width: 100%;
    background-color: #fff;

    .head{
      height: 60px;
      margin: 5px;

      span{
        line-height: 60px;
      }
    }

    .content{
      width: 80%;
      margin: 10px auto;
      min-height: 100px;
      .tag{
        display: inline-block;
        padding: 10px 5px;
      }
    }
  }
</style>
