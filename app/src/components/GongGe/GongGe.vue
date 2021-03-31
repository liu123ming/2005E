<template>
  <div id="GongGe">
    <div id="section1">
      <h1>
        section1
        <van-icon name="arrow" />
      </h1>
      <van-grid :gutter="10" :column-num="2">
        <van-grid-item
          v-for="ele in caskt1.list"
          :key="ele.id"
          :icon="ele.imgPath"
        />
      </van-grid>
      <div class="left-top">
        <img :src="caskt1.banner" alt="" />
      </div>
    </div>
    <div id="section2">
      <div class="section2">
        <ul>
          <li v-for="ele2 in caskt2.list" :key="ele2.id">
            <img :src="ele2.imgPath" alt="" />
            <h2>{{ ele2.title }}</h2>
            <p class="caskt2-son">{{ ele2.intro }}</p>
            <p class="caskt2-fon">￥{{ ele2.price }}</p>
          </li>
        </ul>
      </div>
      <div class="caskt2-nos">
        <img :src="caskt2.banner" alt="" />
      </div>
    </div>
    <div id="section3">
      <div class="caskt3" v-for="ele3 in caskt3.list" :key="ele3.id">
        <div class="sop">
          <p>jackson</p>
          <p class="sop-cje">
            <span>00</span>
            <em>:</em>
            <span>00</span>
            <em>:</em>
            <span>00</span>
          </p>
          <p>Starts at 12:01</p>
        </div>
        <div class="noe">
          <img :src="ele3.imgPath" alt="" />
          <span></span>
        </div>
      </div>
      <div>
        <img :src="caskt3.banner" alt="">
      </div>
    </div>
    <div id="section4">
      <h1>
        section1
        <van-icon name="arrow" />
      </h1>
      <van-grid :gutter="10" :column-num="2">
        <van-grid-item
          v-for="ele in caskt4.list"
          :key="ele.id"
          :icon="ele.imgPath"
        />
      </van-grid>
      <div class="left-top">
        <img :src="caskt4.banner" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      caskt1: [],
      caskt2: [],
      caskt3: [],
      caskt4: [],
    };
  },
  created() {
    this.caskt1 = this.$store.state.list.section1;
    this.caskt2 = this.$store.state.list.section2;
    this.caskt3 = this.$store.state.list.section3;
    this.caskt4 = this.$store.state.list.section4;
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss'>
#GongGe {
  padding: 20px 0 0 0;
  margin-bottom: 50px;
  // overflow: auto;
  #section1 {
    h1 {
      padding: 15px 0;
      font-size: 18px;
      position: relative;
      .van-icon {
        position: absolute;
        right: 26px;
      }
    }
    .van-grid-item__icon {
      font-size: 156px;
      .van-grid-item__content {
        padding: 0;
      }
    }
    .left-top {
      width: 100%;
      padding: 15px 0 0 0;
      img {
        width: 100%;
      }
    }
  }
  #section2 {
    width: 100%;
    padding: 20px 0 0 0;

    margin-bottom: 20px;
    .section2 {
      width: 100%;
      overflow: auto;
      ul {
        display: flex;
        padding: 0 0 0 20px;
        width: 1500px;
        height: 210px;

        li {
          padding: 0 20px 0 0;
          width: 150px;
          height: 200px;
          img {
            width: 100%;
          }
          h2 {
            padding: 10px 0;
            font-weight: 700;
          }
          .caskt2-son {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .caskt2-fon {
            float: left;
            color: red;
          }
        }
      }
    }
    .caskt2-nos {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  #section3 {
    .caskt3 {
      display: flex;
      justify-content: space-around;
      padding: 50px 0;
      .sop {
        .sop-cje{
          padding: 20px 0;
          span{
            display: inline-block;
            width: 25px;
            height: 25px;
            line-height: 25px;
            color: #fff;
            text-align: center;
            background-color: #000;
          }
          em{
            display: inline-block;
            padding: 0 5px;
          }
        }
      }
      .noe {
        img {
          width: 200px;
          height: 90px;
        }
      }
    }
  }
  #section4{
    h1 {
      padding: 15px 0;
      font-size: 18px;
      position: relative;
      .van-icon {
        position: absolute;
        right: 26px;
      }
    }
    .van-grid-item__icon {
      font-size: 156px;
      .van-grid-item__content {
        padding: 0;
      }
    }
    .left-top {
      width: 100%;
      padding: 15px 0 0 0;
      img {
        width: 100%;
      }
    }   
  }
}
</style>