<template>
  <div class="blogindex-container">
    <index-head></index-head>
    <div class="artlist-container">
      <art-list
      v-for="item in currlist"
      :key="item.id"
      :title="item.title"
      :intro="item.intro"
      :dianzan="item.dianzan"
      :watchNum="item.watch_num"
      :date="item.date"
      :id="item.id">

      </art-list>
    </div>
    <page-change :artNum="artNum" :size="size" @getpage="getcurrPage"></page-change>
  </div>
</template>

<script>

import IndexHead from './Index/IndexHead.vue'
import ArtList from './Index/ArtList.vue'
import PageChange from '@/components/PageChange.vue'
import { getArticleListAPI } from '@/api/articleApi.js'

export default {
  components: {
    IndexHead,
    ArtList,
    PageChange
  },
  created () {
    this.getArtList()
  },
  data () {
    return {
      artlist: [],
      currlist: [],
      artNum: 0,
      size: 6,
      page: 0
    }
  },
  methods: {
    async getArtList () {
      const { data: res } = await getArticleListAPI()
      this.artlist = res.data
      this.artNum = this.artlist.length
      this.currlist = this.artlist.slice(this.star, this.end)
    },
    getcurrPage (val) {
      this.page = val - 1
      console.log(this.page)
      this.currlist = this.artlist.slice(this.star, this.end)
      window.scroll(0, 0)
    }
  },
  computed: {
    star () {
      return this.page * this.size
    },
    end () {
      return this.page * this.size + this.size
    }
  }
}
</script>

<style lang='less' scoped>
.artlist-container{
  width: 80%;
  margin: 20px auto;
}

</style>
