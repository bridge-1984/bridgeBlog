<template>
  <div class="list-container">
    <div class="left-head">
      <span v-if="tag === 'all'">所有文章</span>
      <span v-else-if="$route.query.search">关键词为{{ tag }}的搜索结果</span>
      <span v-else>标签为{{ tag }}的文章</span>
    </div>
    <div class="left-art">
    <el-row>
      <left-art-list
      v-for="item in currlist"
      :key="item.id"
      :title="item.title"
      :dianzan="item.dianzan"
      :watchNum="item.watch_num"
      :id="item.id"
      :art_id="item.art_id">
      </left-art-list>
    </el-row>
    </div>
    <page-chaneg :artNum="artNum" :size="size" @getpage="getcurrPage"></page-chaneg>
  </div>
</template>

<script>
import PageChaneg from '@/components/PageChange.vue'
import LeftArtList from './LeftArtList.vue'
import { getArticleListAPI, searchByTagAPI, searchByKeywordAPI } from '@/api/articleApi.js'

export default {
  components: {
    PageChaneg,
    LeftArtList

  },
  props: ['tag'],
  data () {
    return {
      artlist: [],
      currlist: [],
      artNum: 0,
      size: 9,
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
    },
    async getByTag (val) {
      const { data: res } = await searchByTagAPI(val)
      this.artlist = res.data

      this.artNum = this.artlist.length
      this.currlist = this.artlist.slice(this.star, this.end)
    },
    async getByKeyword (val) {
      const { data: res } = await searchByKeywordAPI(val)
      this.artlist = res.data

      this.artNum = this.artlist.length
      this.currlist = this.artlist.slice(this.star, this.end)
    }
  },
  computed: {
    star () {
      return this.page * this.size
    },
    end () {
      return this.page * this.size + this.size
    }
  },
  created () {
    if (this.tag !== 'all') {
      if (this.$route.query.search === 'true') {
        this.getByKeyword(this.tag)
        console.log(111)
      } else { this.getByTag(this.tag) }
      console.log(this.tag)
    } else {
      this.getArtList()
    }
  },
  watch: {
    tag (newtag) {
      if (newtag !== 'all') {
        if (this.$route.query.search === 'true') {
          this.getByKeyword(newtag)
          console.log(111)
        } else { this.getByTag(newtag) }
        console.log(newtag)
      } else {
        this.getArtList()
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .list-container{
    float: left;
    width: 68%;

  .left-head{
      width: 100%;
      height: 80px;
      background-color: white;
      margin-bottom: 20px;
      padding-left: 10px;
      line-height: 80px;
      font-size: 26px;
      font-weight: 700;
      color: #409EFF;
    }

  .left-art{
    min-height: 500px;
  }
  }

</style>
