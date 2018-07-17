<template>
  <div class="footer border-topbottom">

    <router-link to="/"
                 tag="div">
      <span class="iconfont">&#xe623;</span>
      <span>首页</span>
    </router-link>

    <router-link to="/List"
                 tag="div">

      <span class="iconfont">&#xe630;</span>
      <span>列表页</span>

    </router-link>

    <router-link class="cart"
                 tag="div"
                 to="/Collet">
      <span class="number">+1</span>
      <span class="iconfont">&#xe609;</span>
      <span>购物车</span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'footerBar'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

.border-topbottom
  &:before
    border-color $footerColor

.footer
  position fixed
  height $100
  line-height $100
  bottom 0
  left 0
  right 0
  display flex
  align-items center
  font-size $font16
  background $BgColor

  div
    flex 1
    text-align center

  .cart
    position relative

  .number
    position absolute
    top $-40
    left $-50
    width 100%

.router-link-exact-active
  color $fontPriceColor
</style>
