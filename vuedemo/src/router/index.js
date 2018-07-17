import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index'
import List from 'pages/list'
import Collet from 'pages/collet'
import Detail from 'pages/detail'
import Error403 from 'pages/error403'
import Error404 from 'pages/error404'
import Error500 from 'pages/error500'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: { keepAlive: true }
    }, {
      path: '/List',
      name: 'List',
      component: List
    }, {
      path: '/Collet',
      name: 'Collet',
      component: Collet
    }, {
      path: '/Detail/:goodsId',
      name: 'Detail',
      component: Detail
    }, {
      path: '*',
      redirect: '/404',
      component: Error404
    }, {
      path: '/403',
      name: 'Error403',
      component: Error403
    }, {
      path: '/404',
      name: 'Error404',
      component: Error404
    }, {
      path: '/500',
      name: 'Error500',
      component: Error500
    },
  ]

})
