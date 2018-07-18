/*
 * @Author: jiaxinying 
 * @Date: 2018-07-18 17:19:34 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-07-18 18:54:46
 */

'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    cart
  },
  strict: process.env.NODE_ENV !== 'production'
})
