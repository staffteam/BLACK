<template>
  <div id="footers">
    <div class="grid-content bg-purple-dark">
      <div class="content">
        <div class="l">
          <p class="logo" ><img :src="logoUrl"></p>
        </div>
        <div class="c">
          <p v-html="wordSize"></p>
          <p>
            热线电话：{{tel}}
          </p>
          <p>
            邮 箱：{{email}}
          </p>
          <p>
            <a :href="`/sitemap`">网站地图</a>
          </p>
        </div>
        <div class="r">
          <el-image class="wechart" :src="wechart" fit="scale-down"></el-image>
          <h2>扫一扫更精彩！</h2>
        </div>
      </div>
    </div>
    <el-backtop v-if="!isWap">
      <el-image class="topImg" :src="topUrl" fit="scale-down"></el-image>
    </el-backtop>
    <div class="wapTop" v-if="isWap" @click="wapTop">
      <el-image class="topImg" :src="topUrl" fit="scale-down"></el-image>
    </div>
    <div class="rightNav">
      <p class="moveBtn">联系我们</p>
      <ul>
        <li class="w">
          <p></p>
          <h2>客户微信</h2>
          <div>
            <div>
              <p v-html="rNavWcode2"></p>
              <h2>扫描客户微信二维码</h2>
            </div>
          </div>
        </li>
        <li class="w">
          <p></p>
          <h2>官方微信</h2>
          <div>
            <div>
              <p v-html="rNavWcode"></p>
              <h2>扫描官方二维码</h2>
            </div>
          </div>
        </li>
        <li class="t" @mouseover="show2=true" @mouseout="show2=false">
          <p></p>
          <h2>联系电话</h2>
          <div>
            <div>
              <p>热线电话</p>
              <h2>{{rNavTcode}}</h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import http from "@/http.js";
let timer = null;
export default {
  name: "footers",
  data() {
    return {
      topUrl: require("@/assets/images/icon_top.png"),
      logoUrl: require("@/assets/images/logo.png"),
      wechart: require("@/assets/images/code.png"),
      wordSize: "",
      tel: "400-880-16112",
      email: "lexilisi@sina.com",
      rNavWcode: "",
      rNavTcode: "",
      rNavWcode2: "",
      isWap: false
    };
  },
  methods: {
    wapTop() {
      $("body,html").animate(
        {
          scrollTop: 0
        },
        500
      );
    }
  },
  mounted() {
    let the = this;
    the.isWap = window.innerWidth < 800;
    $(window).on("scroll", () => {
      if ($(window).scrollTop() > $(window).height()) {
        $(".wapTop").show();
      }
    });
    $(".moveBtn").hover(function() {
      $(".rightNav").css({ transform: "translateY(-50%) translateX(0%)" });
      $(".moveBtn").css({'opacity':'0'});
    });
    $(".rightNav").hover(
      function() {},
      function() {
        $(".rightNav").css({ transform: "translateY(-50%) translateX(100%)" });
        $(".moveBtn").css({'opacity':'1'});
      }
    );
    //关于我们
    http
      .fetchGet("/api/Home/webinfo")
      .then(data => {
        let datas = JSON.parse(data.data);
        if (datas.errcode) {
          the.wechart = http.path + "/" + datas.result.wechat_img_url;
          the.tel = datas.result.tel;
          the.email = datas.result.email;
          the.wordSize = `${datas.result.copyright} | <a href="http://www.beian.gov.cn/" target="_blank" style="color:#999999;">${datas.result.filing}</a>` ;
          the.logoUrl = http.path + "/" + JSON.parse(data.data).result.logo_url;
          the.rNavWcode =  `<img src="${http.path + "/" + datas.result.wechat_img_url}" />`;
          the.rNavWcode2 = `<img src="${http.path + "/" + datas.result.wechat_service_img_url}" />`;
          the.rNavTcode = datas.result.tel;
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
