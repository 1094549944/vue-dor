<template>
  <div class="recommend-area">
    <div class="recommend-title">
      商品推荐
    </div>
    <div class="recommend-body">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in recommendGoods "
                      :key="index">
          <div class="recommend-item">
            <img :src="item.image"
                 width="100%"
                 height="auto">

            <div class="recommend-name">{{item.goodsName}}</div>
            <div>
              <div class="price-area">
                <span class="origin-price">原价￥{{item.price|moneyFilter}}</span>
              </div>
              <div class="price-area">
                <span class="price">现价(￥{{item.mallPrice|moneyFilter}})</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { toMoney } from '@/filter/moneyFilter'

export default {
  name: 'bannerGoods',
  props: { recommendGoods: Array },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3
      }
    }
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

.recommend-area
  background-color #fff
  margin-top $12

.recommend-title
  border-bottom 1px solid $BgColor
  font-size $font14
  padding $8
  color $fontRedColor

.recommend-body
  border-bottom 1px solid $BgColor

.recommend-item
  width 99%
  border-right 1px solid $BgColor
  font-size $font12
  text-align center

.recommend-item div
  text-align left

.recommend-area .recommend-name
  ellipsis2()
  color $fontColor
  line-height 1.5
  padding $10 $20
  height $70

.recommend-area .price-area
  padding $10 $20

.recommend-area .origin-price
  color $fontOriginColor
  font-size $font10
  text-decoration line-through

.recommend-area .price
  font-weight $weight700
  color $fontPriceColor
</style>
