<template>
  <div>
    <van-card title="标题"
              desc="描述"
              num="2"
              price="2.00"
              :thumb="imageURL">
      <div slot="footer">
        <van-button size="mini">添加</van-button>
        <van-button size="mini">删除</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  name: 'collet'
}
</script>

<style scoped lang="stylus">
</style>
