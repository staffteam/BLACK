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
      <div class="swiper-pagination a"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-content">
        <div class="swiper-button-prev a">
          <el-button icon="el-icon-arrow-left" circle></el-button>
        </div>
        <div class="swiper-button-next a">
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
        <div class="swiper-container" id="list3banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in homeList3.datalist" :key="index">
              <p>
                <img :src="item.imgUrl" :alt="item.title" />
              </p>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-content">
            <div class="swiper-button-prev b">
              <el-button icon="el-icon-arrow-left" circle></el-button>
            </div>
            <div class="swiper-button-next b">
              <el-button icon="el-icon-arrow-right" circle></el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="newContent">
      <div class="content">
        <h2>{{newTitle}}</h2>
        <div class="new">
          <div class="l">
            <div class="swiper-container" id="newBanner">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in newBannerData" :key="index">
                  <p>
                    <img :src="item.imgUrl" :alt="item.title" />
                  </p>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination c"></div>
              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-content">
                <div class="swiper-button-prev c">
                  <el-button icon="el-icon-arrow-left" circle></el-button>
                </div>
                <div class="swiper-button-next c">
                  <el-button icon="el-icon-arrow-right" circle></el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="r">
            <ul>
              <li v-for="(item,index) in newDataList" :key="item.id">
                <a :href="`/new.html?id=${item.id}`" v-if="index==0" class="top">
                  <h2>{{item.title}}</h2>
                  <div class="describe">{{item.describe}}</div>
                  <div class="bottom">
                    <span>{{item.time}}</span>
                    <p>
                      <i class="el-icon-view"></i>
                      {{item.browse}}
                    </p>
                  </div>
                </a>
                <a :href="`/new.html?id=${item.id}`" v-if="index!=0" class="list">
                  <div>
                    <h2>{{item.title}}</h2>
                    <span>{{item.time}}</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="http://" target="_blank">查看更多>></a>
          </div>
        </div>
      </div>
    </div>
    <div id="newContent2">
      <div class="content">
        <h2>{{newTitle2}}</h2>
        <div class="new2">
          <div class="swiper-container" id="newBanner2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in newBannerData2" :key="index">
                <p>
                  <img :src="item.imgUrl" :alt="item.title" />
                </p>
                <h2>{{item.title}}</h2>
                <div>{{item.describe}}</div>
              </div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-content">
            <div class="swiper-button-prev d">
              <el-button icon="el-icon-arrow-left" circle></el-button>
            </div>
            <div class="swiper-button-next d">
              <el-button icon="el-icon-arrow-right" circle></el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="guide">
      <div class="content">
        <ul>
          <li>
            <h2>脱发指南</h2>
            <div class="list" v-for="(item,index) in guideData1" :key="item.id">
              <a :href="`/new.html?id=${item.id}`" target="_blank">
                <p v-if="index==0">
                  <img :src="item.imgUrl" :alt="item.title" />
                </p>
                <h2>
                  <i class="el-icon-arrow-right"></i>
                  {{item.title}}
                </h2>
                <div class="describe">{{item.describe}}</div>
              </a>
            </div>
            <a href="http://" target="_blank">查看更多>></a>
          </li>
          <li>
            <h2>基因育发</h2>
            <div class="list" v-for="(item,index) in guideData2" :key="item.id">
              <a :href="`/new.html?id=${item.id}`" target="_blank">
                <p v-if="index==0">
                  <img :src="item.imgUrl" :alt="item.title" />
                </p>
                <h2>
                  <i class="el-icon-arrow-right"></i>
                  {{item.title}}
                </h2>
                <div class="describe">{{item.describe}}</div>
              </a>
            </div>
            <a href="http://" target="_blank">查看更多>></a>
          </li>
        </ul>
      </div>
    </div>
    <div id="faq">
      <div class="content">
        <div class="r">
          <h2>常见问题</h2>
          <ul>
            <li v-for="(item,index) in faqData" :key="index">
              <a :href="`/new.html?id=${item.id}`" target="_blank">
                <h2>{{item.title}}</h2>
                <div>{{item.describe}}</div>
              </a>
            </li>
          </ul>
          <a href="http://" target="_blank">更多热门问题>></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../../../src/assets/js/home/homebanner";
import datas from "../../../src/assets/js/home/datas";
export default {
  name: "Home",
  data() {
    return {
      ...datas
    };
  },
  methods: {},
  mounted() {
    //顶部轮播
    banner.homebanner();
    //专利证书
    banner.homebanner2();
    //新闻轮播
    banner.homebanner3();
    //新闻报道轮播
    banner.homebanner4(this);
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
.swiper-pagination.c .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
}
@media (max-width: 799px) {
  #homeBanner .swiper-button-content {
    display: none;
  }

  #homeBanner .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
  }
}
</style>
