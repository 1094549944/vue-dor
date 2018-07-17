// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Button, Row, Col, Search, Swipe, Lazyload, SwipeItem, List, Field, NavBar, Tab, Tabs } from 'vant'
import 'swiper/dist/css/swiper.css'
import 'styles/reset'
import 'styles/border'
import 'babel-polyfill'
import 'styles/iconfont'
import fastClick from 'fastclick'

let options = {}
//options = { preLoad: 1, error: './assets/error.jpg', loading: './assets/loading.gif', attempt: 1 }

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Button).use(Row).use(Col).use(Col).use(Lazyload, options).use(Search).use(Swipe).use(SwipeItem).use(List).use(Field).use(NavBar).use(Tab).use(Tabs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
