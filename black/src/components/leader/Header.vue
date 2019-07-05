<template>
  <div id="headers">
    <el-row class="black-head">
      <el-image class="logo" :src="logoUrl" fit="scale-down"></el-image>
      <ul class="nav">
        <li v-for="(item,index) in navData" :key="index">
          <a :href="item.url">
            <h2>{{item.cntitle}}</h2>
            <p>{{item.entitle}}</p>
          </a>
        </li>
      </ul>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "headers",
  data() {
    return {
      logoUrl: require("@/assets/images/logo.png"),
      navData: [
        { cntitle: "首页", entitle: "HOME", url: "/index.html" },
        { cntitle: "产品介绍", entitle: "PRODUCT", url: "/product.html" },
        { cntitle: "品牌动态", entitle: "BRAND", url: "/brand.html" },
        { cntitle: "基因育发", entitle: "HAIR GENE", url: "/hairgene.html" },
        { cntitle: "脱发指南", entitle: "GUIDE", url: "/guide.html" },
        { cntitle: "粉丝福利", entitle: "WELFAFE", url: "/welfafe.html" },
        { cntitle: "关于我们", entitle: "ABOUT US", url: "/aboutus.html" }
      ]
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
<style lang="less" src="../../assets/less/header.less"></style>
