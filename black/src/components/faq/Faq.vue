<template>
  <div id="about">
    <div class="faqHead">
      <el-image class="streamer" :src="streamerUrl" fit="scale-down"></el-image>
      <div class="faqSearch">
        <input type="search" name id placeholder="输问题关键词，如基因育发" />
        <p>
          <i class="el-icon-search"></i>
        </p>
      </div>
    </div>
    <div class="faqContent">
      <div class="content">
        <div :class="isNavBtnShow?'wapListBtn show':'wapListBtn hide'" @click="isNavBtnShow = !isNavBtnShow">
          <i :class="isNavBtnShow?'el-icon-d-arrow-left':'el-icon-d-arrow-right'"></i>
        </div>
        <div :class="isNavBtnShow?'l show':'l hide'">
          <h2>常见问题分类</h2>
          <ul>
            <li v-for="(item,index) in faqNavData" :key="index" :class="item.isCheck?'on':''">
              <a href="javascript:" :data-id="item.id" :data-index="index" @click="faqNavClick">
                <h2>
                  {{item.title}}
                  <i :class="item.isCheck?'el-icon-caret-top':'el-icon-caret-bottom'"></i>
                </h2>
              </a>
              <el-collapse-transition>
                <div v-show="item.isCheck">
                  <div v-for="(the,i) in item.list" :key="i">
                    <a
                      href="javascript:"
                      :class="the.isCheck?'on':''"
                      :data-id="item.id"
                      :data-index="i"
                      @click="faqNavListClick"
                    >
                      <h2>{{the.title}}</h2>
                    </a>
                  </div>
                </div>
              </el-collapse-transition>
            </li>
          </ul>
        </div>
        <div class="r">
          <div class="top">
            <h2>洗发露需要多长时间才能有效果？</h2>
            <p>
              <span>2019-06-12 15:59:42</span>
              <span>
                <i class="el-icon-view"></i> 7
              </span>
            </p>
          </div>
          <div class="bottom">
            <p
              style="font-size:14px;font-weight:400;color:rgba(51,51,51,1);line-height:20px; text-indent:20px;"
            >因人而异，一般7～10天左右就能感到头发弹性和韧性提高，当然也有的朋友用一次就感觉到效果。另外，以前使用的产品的成分多会遗留下来，将其完全清除并使本公司产品的成分充分发挥作用也需要一些时间。护发乳可以更有效地改善头发生长周期，最终使其处于最佳状态。基于这一点，我们建议您持续使用6个月以上。快的话2周就可以看到效果，多数用户在使用2个月后就能看到很好的效果。</p>
          </div>
          <div class="like">
            <h2>猜你感兴趣的问题</h2>
            <ul>
              <li v-for="(item,index) in linkData" :key="index">
                <a :href="`faqMore.html?${item.id}`">
                  <h2>· {{item.title}}</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articles",
  data() {
    return {
      isNavBtnShow: false,
      streamerUrl: require("@/assets/images/streamer_faq.png"),
      aboutData: [
        {
          url: "tel:17512840813",
          imgUrl: require("@/assets/images/icon_phone.png"),
          text: "17512840813",
          title: "热线电话"
        },
        {
          url: "mailto:lexilisi@sina.com",
          imgUrl: require("@/assets/images/icon_email.png"),
          text: "lexilisi@sina.com",
          title: "电子邮箱"
        },
        {
          url: "javascript:",
          imgUrl: require("@/assets/images/icon_wx.png"),
          text: "微信：llxls2016",
          title: "微信咨询"
        }
      ],
      faqNavData: [
        {
          title: "使用效果",
          isCheck: true,
          id: 0,
          list: [
            {
              title: "使用效果二级",
              isCheck: true,
              id: 0
            },
            {
              title: "使用效果二级",
              isCheck: false,
              id: 1
            }
          ]
        },
        {
          title: "使用指南",
          isCheck: false,
          id: 1,
          list: [
            {
              title: "使用指南二级",
              isCheck: false,
              id: 0
            },
            {
              title: "使用指南二级",
              isCheck: false,
              id: 1
            }
          ]
        }
      ],
      weimg: require("@/assets/images/code.png"),
      linkData: [
        {
          title: "脱发很容易生发很难吗？",
          id: 0
        },
        {
          title: "脱发很容易生发很难吗？",
          id: 1
        },
        {
          title: "脱发很容易生发很难吗？",
          id: 2
        },
        {
          title: "脱发很容易生发很难吗？",
          id: 3
        }
      ]
    };
  },
  methods: {
    faqNavClick(e) {
      let the = this;
      let id = e.currentTarget.dataset.id;
      let i = e.currentTarget.dataset.index;
      the.faqNavData.map((value, index) => {
        value.isCheck = index == i;
        return value;
      });
    },
    faqNavListClick(e) {
      let the = this;
      let id = e.currentTarget.dataset.id;
      let i = +e.currentTarget.dataset.index;
      var _i = +e.currentTarget.parentElement.parentElement
        .previousElementSibling.dataset.index;
      the.faqNavData.map((value, index) => {
        if (index == _i) {
          value.list.map((obj, key) => {
            obj.isCheck = key == i;
            return obj;
          });
        } else {
          value.list.map((obj, key) => {
            obj.isCheck = false;
            return obj;
          });
        }
        return value;
      });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/faq.less"></style>
