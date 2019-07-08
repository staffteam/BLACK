<template>
  <div>
    <div id="headers" :class="isNav?'on':'off'">
      <el-row class="black-head">
        <el-image class="logo" :src="logoUrl" fit="scale-down"></el-image>
        <div v-if="isWap" id="wapBtn" :class="isNav?'on':'off'" @click="wapNavBtn">
          <p class="on">
            <i class="el-icon-minus"></i>
            <i class="el-icon-minus"></i>
            <i class="el-icon-minus"></i>
          </p>
          <p class="off">
            <i class="el-icon-close"></i>
          </p>
        </div>
        <div class="wapnav" :class="isNav?'on':'off'" >
          <el-image class="navLogo" v-if="isWap" :src="logoUrl" fit="scale-down"></el-image>
          <ul class="nav">
            <li v-for="(item,index) in navData" :key="index">
              <a :href="item.url">
                <h2>{{item.cntitle}}</h2>
                <p>{{item.entitle}}</p>
              </a>
            </li>
          </ul>
        </div>
      </el-row>
    </div>
    <div v-if="isWap" class="wapHeight"></div>
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
        { cntitle: "品牌动态", entitle: "BRAND", url: "/article.html" },
        { cntitle: "基因育发", entitle: "HAIR GENE", url: "/hairgene.html" },
        { cntitle: "脱发指南", entitle: "GUIDE", url: "/guide.html" },
        { cntitle: "粉丝福利", entitle: "WELFAFE", url: "/welfafe.html" },
        { cntitle: "关于我们", entitle: "ABOUT US", url: "/aboutus.html" }
      ],
      isWap: false,
      isNav: true
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    windowResize() {
      document.getElementsByTagName("html")[0].style.fontSize =
        document.documentElement.clientWidth / 32 + "px";
    },
    wapNavBtn(e) {
      this.isNav = !this.isNav;
      document.getElementsByTagName("body")[0].style.left=!this.isNav?'-150px':'0';
    }
  },
  mounted() {
    var the = this;
    the.isWap = window.innerWidth < 800;
    the.windowResize();
    window.onresize = () => {
      the.windowResize();
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="../../assets/less/header.less"></style>
