<template>
  <div class="main">
    <div class="loadWraper"
         v-if="loadFlag">
      <Loading></Loading>
    </div>
    <template v-else>
      <van-list v-model="loading"
                :finished="finished"
                @load="onLoad">

        <van-row gutter="20">
          <van-col span="12"
                   v-for="(item,index) of list"
                   :key="index">
            <goods-info :goodsImage="item.IMAGE1"
                        :goodsName="item.NAME"
                        :goodsPrice="item.ORI_PRICE"
                        :goodsId="item.ID"></goods-info>
          </van-col>
        </van-row>
      </van-list>
    </template>
  </div>
</template>
<script>
import Loading from 'common/loading'
import goodsInfo from 'common/goodsInfoComponent'
import axios from 'axios'
export default {
  name: 'list',
  components: {
    Loading,
    goodsInfo,

  },
  data () {
    return {
      loadFlag: true,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/list.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data.itemlist
      this.loadFlag = false
      this.list = res.auctions
      this.loading = false;
      if (res.auctions.length > 0) {
        this.finished = true;
      }
    },

    onLoad () {
      this.getInfo()

    }
  },
  created () {
    this.onLoad()
  },
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'

.main
  overflow hidden
  padding-bottom $100

.loadWraper
  position absolute
  left 50%
  top 40%
  transform translate(-50%, -50%)
  -webkit-transform translate(-50%, -50%)
</style>
