<template>
  <div class="content-page">
    <div>
      <p>500</p>
      <p>您要访问的页面服务器出现了问题</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error500'
}
</script>

<style scoped>
.content-page {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 16px;
}
.content-page div p {
  text-align: center;
  padding: 0.16rem 0;
}
</style>
