<template>
  <div class="main">
    <div class="loadWraper"
         v-if="loadFlag">
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
      <!--热门推荐-->

      <div class="hot-area">
        <div class="hot-title">热卖商品</div>
        <div class="hot-goods">
          <!--这里是一个list组件-->
          <van-list>
            <van-row gutter="20">
              <van-col span="12"
                       v-for="item of hotGoods"
                       :key="item.goodsId">
                <goods-info :goodsImage="item.image"
                            :goodsName="item.name"
                            :goodsPrice="item.price"
                            :goodsId="item.goodsId"></goods-info>
              </van-col>
            </van-row>
          </van-list>
        </div>
      </div>

    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Loading from 'common/loading'
import Swiper from 'common/swiper'
import swiperSlot from 'common/swiperSlot'
import bannerGoods from 'common/bannerGoods'
import goodsInfo from 'common/goodsInfoComponent'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    Loading,
    Swiper,
    swiperSlot,
    bannerGoods,
    goodsInfo

  },
  data () {
    return {
      loadFlag: true,
      swiperlist: [],
      hotGoods: []//热卖商品
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
        this.hotGoods = res.data.hotGoods
      }
    }
  },
  ...mapGetters({
    cartData: 'cart/cartData',

  })
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

.main
  overflow hidden

.loadWraper
  position absolute
  left 50%
  top 40%
  transform translate(-50%, -50%)
  -webkit-transform translate(-50%, -50%)

.hot-area
  padding-bottom $100

.hot-area .hot-title
  border-bottom 1px solid $BgColor
  font-size $font14
  padding $8
  color $fontRedColor
  margin $12 0
</style>
