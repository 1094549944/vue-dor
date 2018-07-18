<template>
  <div>
    <div v-for="(item,index) in cartList"
         :key="index">
      <van-card :title="item.NAME"
                desc="描述"
                :num="item.AMOUNT"
                :price="item.ORI_PRICE|moneyFilter"
                :thumb="item.IMAGE1">
        <div slot="footer">
          <van-button size="mini"
                      @click="jianshaoBtn(item)">减少</van-button>
          <van-button size="mini"
                      @click="addBtn(item)">添加</van-button>
          <van-button size="mini"
                      @click="DeleteBtn(item)">删除</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { toMoney } from '@/filter/moneyFilter.js'
export default {
  name: 'collet',
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      cartList: 'cartList'
    })
  }
}
</script>

<style scoped lang="stylus">
</style>
