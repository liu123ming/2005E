<template>
  <div id="swopt">
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item.id">
          <img :src="item.imgPath" alt="" />
        </van-swipe-item>
      </van-swipe>
      <ul>
        <li>
          <van-icon name="passed" color="red" />
          直营品牌
        </li>
        <li>
          <van-icon name="passed" color="red" />
          无忧退货
        </li>
        <li>
          <van-icon name="passed" color="red" />
          48小时 快速退货
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang='scss'>
#swopt {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 0px;
    text-align: center;
    background-color: #39a9ed;
    img {
      widows: 100%;
      height: 200px;
    }
  }
  ul {
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
  }
}
</style>