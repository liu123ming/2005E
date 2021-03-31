<template>
  <div id="app">
    <router-view />
    <tab v-show="show"></tab>
  </div>
</template>
<script>
import tab from "@/components/tab/tab";
export default {
  components: {
    tab,
  },
  data(){
    return{
        show:true
    }
  },
  created(){
    
  },
  watch: {
    $route:{
      handler: function (newvalue) {
        this.show=newvalue.meta.type

      },
      immediate: true,
    },
  },
  methods:{
   
  }


};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
