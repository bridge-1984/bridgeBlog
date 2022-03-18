<template>
  <div class="detail-container">
    <div class="detail-body">
      <div class="header">
        <div class="title">{{art.title}}</div>
        <div class="detailInfo">
          <span><svg-icon name="icon-riqi"></svg-icon>{{getDate}}</span>
          <span><svg-icon name="icon-yanjing-"></svg-icon>{{art.watch_num}}</span>
        </div>
        <hr>
      </div>
      <div class="content">{{art.content}}</div>
    </div>
    <right-nav></right-nav>
  </div>
</template>

<script>
import RightNav from './list/RightNav.vue'
import SvgIcon from '@/components/SvgIcon.vue'

import { getArtByIdAPI } from '@/api/articleApi.js'

export default {
  components: {
    RightNav,
    SvgIcon
  },
  data () {
    return {
      art: { date: '' }
    }
  },
  methods: {
    async initArt (id) {
      const { data: res } = await getArtByIdAPI(id)
      this.art = res.data[0]
    }
  },
  created () {
    this.initArt(this.$route.query.id)
  },
  computed: {
    getDate () {
      return this.art.date.substr(0, 10)
    }
  }
}
</script>

<style lang='less' scoped>
  .detail-container{
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    // 消除浮动带来的影响
    overflow: hidden;

    .detail-body{
      padding: 10px;
      margin: 0 10px;
      background-color: #fff;
      float: left;
      width: 65%;

      .header{
        text-align: center;
      }

      .title{
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
      }

      .detailInfo{
        padding: 15px 0;
        span{
          margin-right: 20px;
        }
      }
    }

    .content{
      min-height: 500px;
    }

  }

</style>
