<template>
  <div class="home" >
    <loading ></loading>
    <topNuv></topNuv>
    <swopt :list="list"></swopt>
    <GongGe></GongGe>
  </div>
</template>

<script>
// import {getBanners}from '@/utils/api/home/index'
import loading from '@/components/loading/loading'
import topNuv from '@/components/topNuv/topNuv'
import swopt from '@/components/swopt/swopt'
import GongGe from '@/components/GongGe/GongGe'
export default {
  name: "",
  components:{
    topNuv,
    swopt,
    GongGe,
    loading,
  },
  data() {
    return {
      list:[],
      caskt1:[],
      caskt2:[],
      caskt3:[],
      caskt4:[],
    };
  },
  created() {
    this.change()
    // getBanners().then(res=>{
    //   console.log(res);
    // })
  },
  mounted() {},
  methods: {
    change() {
      this.$axios({
        url: "http://api.com/index",
        method:'get'
      }).then(res=>{
        console.log(res.data);
        this.list=res.data.swiper
        this.$store.commit('changeList', res.data)
      })
    },
  },
};
</script>

<style lang='scss'>
.home{
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
