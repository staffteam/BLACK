<template>
  <div id="home">
    <!-- 首页轮播 -->
    <div class="swiper-container" id="homeBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerData" :key="index">
          <p><img :src="item.url" :alt="item.title"></p>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-content">
        <div class="swiper-button-prev">
          <el-button icon="el-icon-arrow-left" circle></el-button>
        </div>
        <div class="swiper-button-next">
          <el-button icon="el-icon-arrow-right" circle></el-button>
        </div>
      </div>
    </div>
    <!-- 搜索 -->
    <div id="homeSearch">
      <div class="l">
        <span>热门搜索关键词：</span>
        <a :href="item.url" v-for="(item,index) in searchData" :key="index">{{item.title}}</a>
      </div>
      <div class="r">
        <p>
          <input type="search">
          <i class="el-icon-search"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      bannerData: [
        { title: "1", url: require("@/assets/images/home_banner.png") },
        { title: "2", url: require("@/assets/images/home_banner.png") },
        { title: "3", url: require("@/assets/images/home_banner.png") }
      ],
      searchData:[
        {title:'脱发',url:'/search'},
        {title:'生发',url:'/search'},
        {title:'头发',url:'/search'},
        {title:'乐喜力丝',url:'/search'},
        {title:'基因育发',url:'/search'},
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    var indexbanner = new Swiper("#homeBanner", {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/home.less"></style>