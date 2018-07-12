<template>
  <div class="footer border-topbottom">
    <div>
      <span class="iconfont">&#xe623;</span>
      <span>首页</span>
    </div>
    <div>
      <span class="iconfont">&#xe630;</span>
      <span>列表页</span>
    </div>
    <div class="cart">
      <span class="number">+1</span>
      <span class="iconfont">&#xe609;</span>
      <span>购物车</span>
    </div>

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
</style>
