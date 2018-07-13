<template>
  <div class="wrapper">
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="( banner ,index) in list"
                        :key="index">
          <img v-lazy="banner.image"
               width="100%" />
        </van-swipe-item>
      </van-swipe>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff

.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eee

  .swiper-img
    width 100%
</style>
