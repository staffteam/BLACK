<template>
  <div id="productDetails">
    <el-image class="streamer" :src="streamerUrl" fit="scale-down"></el-image>
    <div class="details">
      <div class="top">
        <div class="l">
          <el-image class="detailsImg" :src="detailsBannerImg" fit="scale-down"></el-image>
          <div class="detailsLeft">
            <div class="swiper-container" id="detailsBanner">
              <div class="swiper-wrapper">
                <div
                  :class="`swiper-slide stop-swiping ${item.on}`"
                  v-for="(item,index) in detailsBannerData"
                  :key="index"
                  :data-index="index"
                >
                  <p>
                    <img :src="item.imgUrl" />
                  </p>
                </div>
              </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-content">
              <div class="swiper-button-prev e">
                <i class="el-icon-caret-left"></i>
              </div>
              <div class="swiper-button-next e">
                <i class="el-icon-caret-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="r">
          <h2>乐喜力丝育发液</h2>
          <div class="content" v-html="detailsBody">{{detailsBody}}</div>
        </div>
      </div>
      <div class="bottom">
        <div class="r">
          <div class="content" v-html="detailsImgBody">{{detailsImgBody}}</div>
        </div>
        <div class="l">
          <div class="title">推荐搭配</div>
          <ul>
            <li v-for="item in recommenData" :key="item.id">
              <a :href="`/productDetails.html?id=${item.id}`" target="_blank">
                <el-image class="listImg" :src="item.imgUrl" fit="scale-down"></el-image>
                <h2>{{item.title}}</h2>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      streamerUrl: require("@/assets/images/streamer_product.png"),
      detailsBannerImg: require("@/assets/images/home_list_2_1.png"),
      detailsBannerData: [
        {
          id: 0,
          imgUrl: require("@/assets/images/home_list_2_1.png"),
          on: "on"
        },
        {
          id: 1,
          imgUrl: require("@/assets/images/home_list_2_2.png"),
          on: ""
        },
        {
          id: 2,
          imgUrl: require("@/assets/images/home_list_2_3.png"),
          on: ""
        },
        {
          id: 3,
          imgUrl: require("@/assets/images/home_list_2_3.png"),
          on: ""
        },
        {
          id: 4,
          imgUrl: require("@/assets/images/home_list_2_3.png"),
          on: ""
        },
        {
          id: 5,
          imgUrl: require("@/assets/images/home_list_2_3.png"),
          on: ""
        },
        {
          id: 6,
          imgUrl: require("@/assets/images/home_list_2_1.png"),
          on: ""
        },
        {
          id: 7,
          imgUrl: require("@/assets/images/home_list_2_2.png"),
          on: ""
        },
        {
          id: 8,
          imgUrl: require("@/assets/images/home_list_2_3.png"),
          on: ""
        }
      ],
      indexs: 0,
      lens: 0,
      detailsBody: `<div class="productBody">
        <div><h2>【产品名称】</h2><div>乐喜力丝育发液</div></div>
        <div><h2>【产品类别】</h2><div>育发类</div></div>
        <div><h2>【产品规格】</h2><div>100ML</div></div>
        <div><h2>【产品功效】</h2><div>抑制脱发基因的释放，激活和营养毛囊，快速止脱，强力生发</div></div>
        <div class="multi"><h2>【产品特点】</h2><div>乐喜力丝育发液从多种植物中提取出了抑制人体FGF-5基因释放的成份FGF-5S ( 生发酶)，FGF-5S 能迅速抑制脱发基因的释放，快速阻断脱发的根源;植物提取物直接作用于头皮，外用安全并没有任何副作用</div></div>
        <div><h2>【适用人群】</h2><div>脱发人士</div></div>
        <div class="multi"><h2>【使用方法】</h2><div>早晚各使用一次，取适量涂抹在头皮上，同时轻轻地进行按摩使头皮有动的感觉。为了不伤至头皮，要用指腹对全头 皮进行轻轻揉搓。推荐早晨头发整理前，晚上洗发后使用。</div></div>
        </div>`,
      recommenData: [
        {
          title: "乐喜力丝育发液",
          id: 0,
          imgUrl: require("@/assets/images/home_list_2_1.png")
        },
        {
          title: "乐喜力丝育发液",
          id: 1,
          imgUrl: require("@/assets/images/home_list_2_2.png")
        },
        {
          title: "乐喜力丝育发液",
          id: 2,
          imgUrl: require("@/assets/images/home_list_2_3.png")
        }
      ],
      detailsImgBody: `<div class="skin-box-bd clear-fix">
            <span>
								    <table width="900" height="1445" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td><a href="//ruisi.tmall.com/?spm=a220o.1000855.w5003-21801827139.1.18722f86mquyZ5&amp;scene=taobao_shop" target="_blank" data-spm-wangpu-module-id="5003-21801827139" data-spm-anchor-id="a220o.1000855.w5003-21801827139.1"><img src="//gdp.alicdn.com/imgextra/i3/2064176038/O1CN01ADpOFU1uTRzH6HK8c_!!2064176038.jpg" width="790" height="375" alt="" data-spm-anchor-id="a220o.1000855.5003-21801827139.i0.18722f86mquyZ5"></a></td> </tr> <tr> <td> <img src="//gdp.alicdn.com/imgextra/i3/2064176038/O1CN01sDoGgi1uTRz7gGtBm_!!2064176038.jpg" width="790" height="858" alt="" class="img-ks-lazyload" data-spm-anchor-id="a220o.1000855.5003-21801827139.i1.18722f86mquyZ5"></td> </tr> <tr> <td><a href="https://amos.alicdn.com/getcid.aw?spm=a220o.1000855.w5003-21801827139.2.18722f86mquyZ5&amp;v=3&amp;groupid=0&amp;s=1&amp;charset=utf-8&amp;uid=reshow%E7%91%9E%E4%B8%9D%E6%97%97%E8%88%B0%E5%BA%97&amp;site=cntaobao&amp;fromid=cntaobaoreshow%C8%F0%CB%BF%C6%EC%BD%A2%B5%EA&amp;scene=taobao_shop" target="_blank" data-spm-wangpu-module-id="5003-21801827139" data-spm-anchor-id="a220o.1000855.w5003-21801827139.2"><img src="//gdp.alicdn.com/imgextra/i2/2064176038/O1CN0105pNs61uTRzDVcqjb_!!2064176038.jpg" width="790" height="212" alt="" class="img-ks-lazyload"></a></td> </tr> </tbody></table>
							</span>
        </div>`
    };
  },
  methods: {},
  mounted() {
    let the = this;
    let len = 0;
    if (window.innerWidth < 800) {
      len = the.detailsBannerData.length > 3 ? 3 : the.detailsBannerData.length;
    } else {
      len = the.detailsBannerData.length > 5 ? 5 : the.detailsBannerData.length;
    }
    the.detailsBannerImg = the.detailsBannerData[0].imgUrl;
    return new Swiper("#detailsBanner", {
      slidesPerView: len,
      slidesPerView: len,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next.e",
        prevEl: ".swiper-button-prev.e"
      },
      noSwiping: true,
      observer: true,
      on: {
        tap: function(event) {
          let e = event.target || event.srcElement;
          let obj =
            e.parentElement.classList[0] == "swiper-slide"
              ? e
              : e.parentElement;
          if (obj.parentElement.classList[0] != "swiper-slide") {
            return false;
          }
          let i = obj.parentElement.dataset.index;
          the.lens = +i - the.indexs;
          the.detailsBannerData.map((value, key, arr) => {
            key == i ? (value.on = "on") : (value.on = "");
            return value;
          });
          the.detailsBannerImg = the.detailsBannerData[i].imgUrl;
        },
        slideChange: function() {
          let i = this.activeIndex;
          let _i = the.indexs;
          if (_i > i) {
            _i = the.lens + the.indexs - (the.indexs - i);
          } else {
            _i = the.indexs + (i - the.indexs) + the.lens;
          }
          the.detailsBannerData.map((value, key, arr) => {
            key == _i ? (value.on = "on") : (value.on = "");
            return value;
          });
          the.detailsBannerImg = the.detailsBannerData[_i].imgUrl;
          the.indexs = this.activeIndex;
        }
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/product.less"></style>
