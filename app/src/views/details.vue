<template>
  <div id="details">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in img" :key="item.id">
          <img :src="item.imgSrc" alt="">
      </van-swipe-item>
    </van-swipe>
    <p><span>机型：</span>{{list.title}}</p>
    <p><span>广告：</span>{{list.intro}}</p>
    <p><span>价格：</span>{{list.price}}</p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        img:[],
        list:[]
    };
  },
  created() {},
  mounted() {
      this.$axios({
          url:'http://api.com/detail',
          method:'get',
      }).then(res=>{
          this.img=res.data.swiper
          this.list=res.data.view
      })
  },
  methods: {},
};
</script>

<style lang='scss'>
#details{
      .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;

    text-align: center;
    background-color: #39a9ed;
  }
}
</style>