// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Button, Row, Col, Search, Swipe, Lazyload, SwipeItem, List, Field, NavBar, Tab, Tabs, Card } from 'vant'
import 'swiper/dist/css/swiper.css'
import 'styles/reset'
import 'styles/border'
import 'babel-polyfill'
import 'styles/iconfont'
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Button).use(Row).use(Col).use(Col).use(Lazyload).use(Search).use(Swipe).use(SwipeItem).use(List).use(Field).use(NavBar).use(Tab).use(Tabs).use(Card)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
