<template>
  <div id="classi">
    <van-row>
      <van-col span="5">
        <div class="left">
            <ul v-for="(item,index) in datas" :key="index" @click="cahnge(item.__ob__.dep.id)">
              <li>
                {{item.title}}
              </li>
            </ul>
        </div>
      </van-col>
      <van-col span="19">
        <div class="right"> 
            <ul>
              <li v-for="(item,index) in lists" :key="index" @click="cart">
                  <img :src="item.imgPath" alt="">
                  {{item.title}}
              </li>
            </ul>
        </div>
      </van-col>
    </van-row>
    <!-- <div class="left">
      <van-sidebar v-model="activeKey" @change="onChange(item.__ob__.dep.id)">
        <van-sidebar-item
          :title="item.title"
          v-for="(item, index) in datas"
          :key="index"
        />
      </van-sidebar>
    </div>
    <div class="ringth">
      <van-grid :gutter="10">
        <van-grid-item
          v-for="value in 8"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeKey: 0,
      datas: [],
      lists: [],
    };
  },
  created() {},
  mounted() {
    this.$axios({
      url: "http://api.com/category",
    }).then((res) => {
      this.datas = res.data.aside;
    });
  },
  methods: {
    cahnge(i) {
      this.lists = [];
      //   Notify({ type: "primary", message: index });
      this.datas.forEach((item, index) => {
        if(i==item.__ob__.dep.id){
          item.list.forEach((a,b)=>{
            this.lists.push(a)
          })
        }
      });
    },
    cart(){
      this.$router.push('/details')
    }
  },
};
</script>

<style scoped lang="scss">


#classi {
  .left{
    width: 100%;
    margin: 0 0 100px 0;
    li{
      height: 30px;
      line-height: 30px;
      background-color: lawngreen;
      margin-top: 10px;
    }
  }
  .right{
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 100px;
      li{
        width: 30%;
        height: 100%;
        margin-bottom: 10px;
        img{
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>