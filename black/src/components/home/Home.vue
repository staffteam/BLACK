<template>
  <div id="home">
    <!-- 首页轮播 -->
    <div class="swiper-container" id="homeBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerData" :key="index">
          <p>
            <img :src="item.url" :alt="item.title" />
          </p>
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
          <input type="search" />
          <i class="el-icon-search"></i>
        </p>
      </div>
    </div>
    <!-- 首页列表1 -->
    <div id="homeList1">
      <div class="content">
        <div class="r">
          <h2>{{homeList1.title}}</h2>
          <div>{{homeList1.describe}}</div>
          <ul>
            <li v-for="item in homeList1.datalist" :key="item.id">
              <a :href="`/product.html?id=${item.id}`">
                <div>
                  <div class="img">
                    <img :src="item.imgUrl" />
                  </div>
                  <p>{{item.title}}</p>
                </div>
                <h2>{{item.describe}}</h2>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="homeList2">
      <div class="content">
        <div class="l">
          <h2>{{homeList2.title}}</h2>
          <div v-html="homeList2.describe">{{homeList2.describe}}</div>
          <ul>
            <li v-for="item in homeList2.datalist" :key="item.id">
              <a :href="`/product.html?id=${item.id}`">
                <div class="img">
                  <img :src="item.imgUrl" />
                </div>
                <p>{{item.title}}</p>
                <h2>{{item.describe}}</h2>
                <span>查看详情</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="homeList3">
      <div class="content">
        <h2>{{homeList3.title}}</h2>
        <div class="describe" v-html="homeList3.describe">{{homeList3.describe}}</div>
        <el-carousel class="list3banner" indicator-position="none" arrow="always" :interval="5000" type="card" height="400px">
          <el-carousel-item v-for="(item,index) in homeList3.datalist" :key="index">
            <el-image :src="item.imgUrl" fit="scale-down"></el-image>
          </el-carousel-item>
        </el-carousel>
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
      searchData: [
        { title: "脱发", url: "1" },
        { title: "生发", url: "2" },
        { title: "头发", url: "3" },
        { title: "乐喜力丝", url: "4" },
        { title: "基因育发", url: "5" }
      ],
      homeList1: {
        title: "开启基因育发新时代",
        describe:
          "乐喜力丝是基因技术在生发领域的最新突破，采用国际浓缩小分子工艺，不仅能改善头皮血液循环，赋活强健毛囊，提升发根活性，有助于秀发生长，同时还能修复细弱发质，令秀发饱满强韧、丰盈闪亮。",
        datalist: [
          {
            title: "基因科技",
            imgUrl: require("@/assets/images/home_list_1_1.png"),
            id: "001",
            describe: "特含的FGF-5S生发酶促进新生毛发的生长"
          },
          {
            title: "小分子工艺",
            imgUrl: require("@/assets/images/home_list_1_2.png"),
            id: "002",
            describe: "特含的FGF-5S生发酶促进新生毛发的生长"
          },
          {
            title: "天然提取",
            imgUrl: require("@/assets/images/home_list_1_3.png"),
            id: "003",
            describe: "特含的FGF-5S生发酶促进新生毛发的生长"
          }
        ]
      },
      homeList2: {
        title: "乐喜力丝全系列呈现",
        describe: "「止脱&nbsp;&nbsp;&nbsp;固发&nbsp;&nbsp;&nbsp;生发」",
        datalist: [
          {
            title: "止脱生发 强发固发",
            imgUrl: require("@/assets/images/home_list_2_1.png"),
            id: "001",
            describe: "乐喜力丝洗发水"
          },
          {
            title: "止脱生发 强发固发",
            imgUrl: require("@/assets/images/home_list_2_2.png"),
            id: "002",
            describe: "乐喜力丝洗发水"
          },
          {
            title: "止脱生发 强发固发",
            imgUrl: require("@/assets/images/home_list_2_3.png"),
            id: "003",
            describe: "乐喜力丝洗发水"
          }
        ]
      },
      homeList3: {
        title: "专利证书",
        describe:
          "这是防脱生发领域公认的一次革命性的重大突破，已经获得美国、欧盟、中国等多个国家的多项国际专利。",
        datalist: [
          {
            title: "止脱生发 强发固发",
            imgUrl: require("@/assets/images/home_list_3_1.png"),
            id: "001"
          },
          {
            title: "止脱生发 强发固发",
            imgUrl: require("@/assets/images/home_list_3_1.png"),
            id: "002"
          },
          {
            title: "止脱生发 强发固发",
            imgUrl: require("@/assets/images/home_list_3_1.png"),
            id: "003"
          }
        ]
      }
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
<style>
div.el-carousel__mask {
  background-color: rgba(0, 0, 0, 0);
}
.el-carousel__arrow {
  height: 43px;
  width: 43px;
  font-size: 25px;
}
.el-carousel__arrow i {
  font-weight: 600;
}
.el-carousel--horizontal {
  overflow: hidden;
}
</style>
