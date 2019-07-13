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
    <el-backtop>
      <el-image class="topImg" :src="topUrl" fit="scale-down"></el-image>
    </el-backtop>
  </div>
</template>

<script>
import http from "@/http.js";
export default {
  name: "footers",
  data() {
    return {
      topUrl: require("@/assets/images/icon_top.png"),
      logoUrl: require("@/assets/images/logo.png"),
      wechart: require("@/assets/images/code.png"),
      wordSize: "",
      tel: "400-880-16112",
      email: "lexilisi@sina.com"
    };
  },
  methods: {},
  mounted() {
    let the = this;
    //关于我们
    http
      .fetchGet("/api/Home/webinfo")
      .then(data => {
        let datas = JSON.parse(data.data);
        if (datas.errcode) {
          the.wechart = http.path + "/" + datas.result.wechat_img_url;
          the.tel = datas.result.tel;
          the.email = datas.result.email;
          the.wordSize = datas.result.copyright + " | " + datas.result.filing;
          the.logoUrl = http.path + "/" + JSON.parse(data.data).result.logo_url;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/footer.less"></style>
