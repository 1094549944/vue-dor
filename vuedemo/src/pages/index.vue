<template>
  <div class="main">
    <div v-if="loadFlag">
      <Loading></Loading>
    </div>
    <template v-else>
      <!--vant swiper-->
      <Swiper :list="swiperlist"></Swiper>
      <!--使用slot 插槽，使用vue-awesome-swiper 组件-->
      <swiper-slot>
        <div slot="swiperBanner">
          <banner-goods :recommendGoods="bannerGoods"></banner-goods>
        </div>
      </swiper-slot>
    </template>
  </div>
</template>

<script>
import Loading from 'common/loading'
import Swiper from 'common/swiper'
import swiperSlot from 'common/swiperSlot'
import bannerGoods from 'common/bannerGoods'
import axios from 'axios'
export default {
  name: 'Index',
  components: {
    Loading,
    Swiper,
    swiperSlot,
    bannerGoods
  },
  data () {
    return {
      loadFlag: true,
      swiperlist: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/api/index.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.loadFlag = false
        this.swiperlist = res.data.swiperlist
        this.bannerGoods = res.data.recommend
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.main
  position absolute
  left 0
  right 0
  bottom 0
  top 0
  overflow auto
</style>
