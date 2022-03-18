<template>
  <div class="artlist-containrt">
    <el-card class="box-card" shadow='hover'>
      <router-link :to="'/detail?id='+id">
      <div class="images">
        <img src="@/static/pic/首页.jpg" alt="">
      </div>
      </router-link>
      <div slot="header" class="clearfix">
        <router-link :to="'/detail?id='+id" style="text-decoration: none;"><span class="title">{{title}}</span></router-link>
        <el-button style="float: right; padding: 10px 0;" type="text" @click="toDetail">详细内容 >></el-button>
      </div>
      <div class="text item">
        <div class="intro">简介：{{intro}}</div>
        <div class="artTag" v-for="item in taglist" :key="item.id">
          <router-link :to="'/list/'+item.tagname"><el-tag effect="dark" :color="item.color">{{item.tagname}}</el-tag></router-link>
        </div>
        <div class="data">
          <span><svg-icon name='icon-riqi'></svg-icon>{{getdate}}</span>
          <span><svg-icon name="icon-dianzan"></svg-icon>{{dianzan}}</span>
          <span><svg-icon name="icon-yanjing-"></svg-icon>{{watchNum}}</span>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'

import { getArtTaglistAPI } from '@/api/articleApi.js'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    intro: {
      type: String,
      default: '无简介'
    },
    date: {
      type: String,
      required: true
    },
    dianzan: {
      type: Number,
      default: 0
    },
    watchNum: {
      type: Number,
      default: 0
    },
    id: {
      type: Number,
      required: true
    }
  },
  components: {

    SvgIcon
  },
  computed: {
    getdate () {
      return this.date.substr(0, 10)
    }
  },
  data () {
    return {
      taglist: []
    }
  },
  methods: {
    async initTagList (id) {
      const { data: res } = await getArtTaglistAPI(id)
      this.taglist = res.data
    },
    toDetail () {
      this.$router.push({ path: '/detail', query: { id: this.id } })
    }
  },
  created () {
    this.initTagList(this.id)
  }
}
</script>

<style lang='less' scoped>
  .box-card:hover{
      .title{
        color: #409EFF;
      }
    }

  .box-card{
    margin: 20px 0;

    /deep/ .title{
      font-size: 30px;
      font-weight: 700;
      color: black;
    }

    .images{
      float: left;
      margin: 0 20px 10px 0;
      img{
        width: 400px;
        height: 300px;
      }
    }

    .item{
      float: left;
      height: 300px;
      width: 60%;
      .intro{
        height: 208px;
        color: #7b7e86;
        font-size: 16px;
        line-height: 28px;
      }
      .data{
        margin-top: 20px;
        span{
          margin-right: 20px;
          color: #7b7e86;
        }
      }
      .artTag{
        display: inline-block;
        padding: 15px 10px 0 0;
      }
    }
  }
</style>
