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
                 width="80%">
            <div>{{item.goodsName}}</div>
            <div>￥{{item.price|moneyFilter}}(￥{{item.mallPrice|moneyFilter}})</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bannerGoods',
  data () {
    return {
      swiperOption: {
        slidesPerView: 3
      }
    }
  }
}
</script>

<style scoped>
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
</style>
