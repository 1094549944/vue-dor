'use strict'
const state = {
  cartList: [{
    'ID': '0032862950ca44d397e58a6fb10a3e38',
    'GOODS_SERIAL_NUMBER': '6914782121027',
    'SHOP_ID': '402880e860166f3c0160167897d60002',
    'SUB_ID': '402880e86016d1b5016016e4dca2001e',
    'GOOD_TYPE': 1,
    'STATE': 0,
    'IS_DELETE': 1,
    'NAME': '徐福记1250酥心糖桶600g/桶',
    'ORI_PRICE': 57.9,
    'PRESENT_PRICE': 49.9,
    'AMOUNT': 10000,
    'SALES_COUNT': 0,
    'IMAGE1': 'http://images.baixingliangfan.cn/shopGoodsImg/20180213/20180213110054_6547.jpg'
  }]
}
const getters = {
  cartList: state => state.cartList
}
const actions = {
  // 添加购物车

}
const mutations = {}
export default {
  state,
  getters,
  actions,
  mutations
}
