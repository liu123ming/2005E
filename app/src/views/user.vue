<template>
<div id="user">
    <div>{{this.$store.state.name}}</div>
    <button @click="loginto">退出</button>
    我的
</div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  created() {

 },
  mounted() {

 },
  methods:{
    loginto(){
        localStorage.removeItem("token");
            this.$router.push("/login");
            this.$store.commit("logout");
    }
 },
 }
</script>

<style lang='scss'>


</style>