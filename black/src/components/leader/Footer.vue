<template>
  <div id="footers">
    <div class="grid-content bg-purple-dark">
      <div class="content">
        <div class="l">
          <el-image class="logo" :src="logoUrl" fit="scale-down"></el-image>
        </div>
        <div class="c">
          <p>{{wordSize}}</p>
          <p>
            <a :href="`tel:${tel}`">热线电话：{{tel}}</a>
          </p>
          <p>
            <a :href="`mailto:${email}`">邮 箱：{{email}}</a>
          </p>
        </div>
        <div class="r">
          <el-image class="wechart" :src="wechart" fit="scale-down"></el-image>
          <h2>扫一扫更精彩！</h2>
        </div>
      </div>
    </div>
    <el-backtop >
       <el-image class="topImg" :src="topUrl" fit="scale-down"></el-image>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "footers",
  data() {
    return {
      topUrl: require("@/assets/images/icon_top.png"),
      logoUrl: require("@/assets/images/logo.png"),
      wechart: require("@/assets/images/code.png"),
      wordSize:
        "Copyright &#169 2014-2018 健洛公司版权所有丨 冀ICP备17027272号",
      tel: "400-880-1612",
      email: "lexilisi@sina.com"
    };
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/footer.less"></style>
