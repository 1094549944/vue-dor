<template>
  <div class="goods-info"
       @click="goGoodsPage()">
    <div class="goods-image">
      <img v-lazy="goodsImage"
           width="90%" />
    </div>
    <div class="goods-name">{{goodsName}}</div>
    <div class="goods-price">￥{{goodsPrice | moneyFilter }}
    </div>
    <div>
      <van-button type="primary"
                  plain>加入购物车</van-button>
    </div>
  </div>
</template>

<script>
import { toMoney } from '@/filter/moneyFilter.js'
export default {
  props: ['goodsImage', 'goodsName', 'goodsPrice', 'goodsId'],
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  created () {

  },
  methods: {
    goGoodsPage () {
      this.$router.push({ name: 'Detail', params: { goodsId: this.goodsId } })
    }
  }
}
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'

.goods-info
  font-size $font12

.goods-info div
  padding $10 $20

.goods-name
  ellipsis2()
  color $fontColor
  font-size $font12
  line-height 1.5
  height $70

.goods-price
  font-weight $weight700
  color $fontPriceColor
</style>