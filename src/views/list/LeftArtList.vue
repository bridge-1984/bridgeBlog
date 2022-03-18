<template>

    <el-col :span="8" style="padding: 5px; text-align: center">
    <el-card body-style="padding: 10px" shadow='hover'>
      <router-link :to="'/detail?id='+id" style="text-decoration: none; color: white;">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      </router-link>
      <div class="content">
        <span class="title">
          <router-link :to="'/detail?id='+id" style="text-decoration: none; color: black;">
          {{ title }}
          </router-link>
          </span>
        <div class="tag">
          <div style="float: left"><span>标签：</span>
          <span
          v-for="item in taglist"
          :key="item.id">
          <router-link :to="'/list/'+item.tagname" style="text-decoration: none; color: white;">
          <el-tag
          style="margin-left: 5px; border-width: 0"
          :color="item.color"
          effect="dark"
          >
          {{ item.tagname }}
          </el-tag>
          </router-link>
          </span>
          </div>

        </div>
        <div class="detail">
          <span><svg-icon name="icon-dianzan"></svg-icon>{{ dianzan }}</span>
          <span><svg-icon name='icon-yanjing-'></svg-icon>{{ watchNum }}</span>
          <router-link :to="'/detail?id='+id" style=" float: right; padding: 0">文章详情</router-link>
        </div>
      </div>
    </el-card>
  </el-col>

</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'
import { getArtTaglistAPI } from '@/api/articleApi.js'
export default {
  components: {
    SvgIcon
  },
  props: {
    title: {
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
      required: true
    },
    art_id: {
      required: true
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
    }
  },
  created () {
    // 通过传入值的类型判断是所有文章，还是通过标签获取文章
    if (typeof this.art_id === 'number') {
      this.initTagList(this.art_id)
    } else {
      this.initTagList(this.id)
    }
  }
}
</script>

<style lang='less' scoped>

    // .el-card:hover{
    //   img{
    //     transform: scale(1.1);
    //   }
    // }

    .image{
      width: 235px;
      height: 235px;
      object-fit: cover;
    }

    .content>span{
      display: inline-block;
      margin: 10px;
      font-size: 22px;
      font-weight: 700;
    }

    .tag{
      height: 32px;
    }

    .detail{
      float: left;
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 10px 0;

      span{
        float: left;
        padding-right: 15px;
        font-size: 16px;
        // vertical-align: middle;

      }

      a{
        text-decoration: none;
      }
    }
</style>
