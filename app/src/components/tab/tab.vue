<template>
  <div id="tab">
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/Home">标签</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/car">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/user">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
         active: '/home',
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang='scss'>
</style>