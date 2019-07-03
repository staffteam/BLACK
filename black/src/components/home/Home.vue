<template>
  <div id="home">
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    const test = this.msg;
    if (test == 111) {
      console.log(test);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../../src/assets/less/home.less"></style>
