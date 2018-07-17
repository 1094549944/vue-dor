<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import footerBar from 'common/footer'
export default {
  name: 'App',
  components: {
    footerBar
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
