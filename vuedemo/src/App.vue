<template>
  <div id="app">
    <router-view/>
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
</style>
