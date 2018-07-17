<template>
  <div class="detail">
    <div class="navbar-div">
      <van-nav-bar title="商品详情"
                   left-text="返回"
                   left-arrow
                   @click-left="onClickLeft" />
    </div>
    <div class="topimage-div">
      <img :src="goodsInfo.IMAGE1"
           width="100%" />
    </div>
    <div class="goods-name">{{goodsInfo.NAME}} </div>
    <div class="goods-price">价格 ：￥{{goodsInfo.PRESENT_PRICE | moneyFilter}}元</div>
    <div>
      <van-tabs swipeable
                sticky>
        <van-tab title="商品详情">
          <div class="detail"
               v-html="goodsInfo.DETAIL">

          </div>
        </van-tab>
        <van-tab title="评论">
          <div class="desc-content"
               v-for="item in descInfo"
               :key="item.id">
            <p class="name border-bottom">{{ item.name }}</p>
            <p class="desc">{{item.desc}}</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
import { toMoney } from '@/filter/moneyFilter.js'
export default {
  name: 'detail',
  data () {
    return {
      goodsId: '',
      goodsInfo: {},  //商品详细信息 
      descInfo: []//评论
    }
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  created () {
    this.goodsId = this.$route.params.goodsId

    this.getInfo()
  },
  methods: {
    getInfo () {
      axios({
        url: '/api/detail.json',
        method: 'get',
        data: { goodsId: this.goodsId }
      })
        .then(response => {

          if (response.data) {
            this.goodsInfo = response.data.data.details
            this.descInfo = response.data.data.info
          } else {
            Toast('服务器错误，数据获取失败')
          }

        })
        .catch(error => {
          console.log(error)
        })
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

.detail
  padding-bottom $100

.goods-name
  background-color #fff

.goods-price
  background-color #fff

.detail
  font-size 0px !important

.goods-bottom > div
  flex 1
  padding $5

.desc-content
  padding 0 $20
  color $fontColor
  font-size $font12

  .name
    font-size $16
    height $50
    line-height $50
    font-weight bold

  .border-bottom
    &:after
      border-color $footerColor

  .desc
    padding-top $10
    text-indent $font32
    line-height 1.5
</style>
