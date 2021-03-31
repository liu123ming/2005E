<template>
  <div id="loading" v-show="show">
    <div class="msg_box">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
    msg: {
      type: String,
    },
  },
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
#loading {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  .msg_box {
    padding: 8px 20px;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
  }
}
</style>