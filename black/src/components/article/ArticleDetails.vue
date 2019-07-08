<template>
  <div id="articles">
    <el-image class="streamer" :src="streamerUrl" fit="scale-down"></el-image>
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
    <div class="articlelist border1">
      <div class="l">
        <div class="content">
          <div class="title">
            <h2>为什么脱发后别人能够生发成功，而你就不行？</h2>
            <p>
              <span>
                <i class="el-icon-time"></i>
                2019-06-12
              </span>
              <span>
                <i class="el-icon-view"></i>
                7
              </span>
            </p>
          </div>
          <div class="detailsBody" v-html="detailsBody">{{detailsBody}}</div>
          <div class="detailsNext">
            <a href="javascript:" class="not" target="_blank">上一页：没有了</a>
            <a href="http://" target="_blank">下一页：我要为乐喜力丝育发液实名打CALL！</a>
          </div>
        </div>
      </div>
      <div class="r">
        <div class="list">
          <ul>
            <li v-for="item in articleNavData" :key="item.id" :class="`${item.on}`">
              <a :href="`/articleDetails.html?id=${item.id}`">
                <h2>{{item.title}}</h2>
              </a>
            </li>
          </ul>
        </div>
        <div class="recommen">
          <div class="title">推荐搭配</div>
          <ul>
            <li v-for="item in recommenData" :key="item.id">
              <a :href="`/articleDetails.html?id=${item.id}`" target="_blank">
                <h2>{{item.title}}</h2>
                <p>{{item.time}}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="recommen">
          <div class="title">热门标签</div>
          <ul class="labelContent">
            <li v-for="item in labelData" :key="item.id">
              <a :href="`/articleDetails.html?id=${item.id}`" target="_blank">
                <h2>{{item.title}}</h2>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottomRecommen">
      <h2>热门推荐</h2>
      <ul>
        <li v-for="item in articleData" :key="item.id">
          <a :href="`/articleDetails.html?id=${item.id}`" target="_blank">
            <p class="listImg"><img :src="item.imgUrl"></p>
            <div class="listContent">
              <h2>{{item.title}}</h2>
              <p>
                <span>
                  <i class="el-icon-time"></i>
                  {{item.time}}
                </span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "articles",
  data() {
    return {
      streamerUrl: require("@/assets/images/streamer_article.png"),
      searchData: [
        {
          title: "脱发",
          url: "1"
        },
        {
          title: "生发",
          url: "2"
        },
        {
          title: "头发",
          url: "3"
        },
        {
          title: "乐喜力丝",
          url: "4"
        },
        {
          title: "基因育发",
          url: "5"
        }
      ],
      articleData: [
        {
          title: "乐喜力丝育发液",
          id: 1,
          time: "2019-05-20",
          view: "11",
          imgUrl: require("@/assets/images/article_list_1.png")
        },
        {
          title: "乐喜力丝育发液",
          id: 2,
          time: "2019-05-20",
          view: "11",
          imgUrl: require("@/assets/images/article_list_1.png")
        },
        {
          title: "乐喜力丝育发液",
          id: 3,
          time: "2019-05-20",
          view: "11",
          imgUrl: require("@/assets/images/article_list_1.png")
        },
        {
          title: "乐喜力丝育发液",
          id: 4,
          time: "2019-05-20",
          view: "11",
          imgUrl: require("@/assets/images/article_list_1.png")
        }
      ],
      articleNavData: [
        {
          title: "品牌动态",
          id: 0,
          on: "on"
        },
        {
          title: "基因育发",
          id: 1,
          on: ""
        },
        {
          title: "脱发指南",
          id: 2,
          on: ""
        },
        {
          title: "粉丝福利",
          id: 3,
          on: ""
        }
      ],
      recommenData: [
        {
          title: "乐喜力丝育发液",
          id: 0,
          time: "2019-05-20 14:15:16"
        },
        {
          title: "乐喜力丝育发液",
          id: 1,
          time: "2019-05-20 14:15:16"
        },
        {
          title: "乐喜力丝育发液",
          id: 2,
          time: "2019-05-20 14:15:16"
        },
        {
          title: "乐喜力丝育发液",
          id: 3,
          time: "2019-05-20 14:15:16"
        },
        {
          title: "乐喜力丝育发液",
          id: 4,
          time: "2019-05-20 14:15:16"
        }
      ],
      detailsBody: ` <p style="font-size:16px; text-indent:20px;"  >有了脱发问题，让人非常困扰，但是最让发友接受不了的却是，眼看着别人的脱发问题逐渐都有所改善，可自己的脱发问题却迟迟没有好转的现象，这让一众发友忧心忡忡，就好像在考场上，看着别人一个个的提前交卷，而自己却还没有答完考题一样，心理惴惴不安。 其实有这种疑问的发友不在少数，想要搞清楚其中原因，我们首先要清楚一件事，那就是不同发友的脱发类型不尽相同，适合他人的办法并不一定适合自己，发友需要做到稳定的、有针对性的去改善自己的脱发问题，这并不是一场比赛，而是自己完善进步的一个过程。 很多发友在生发过程中，会出现以下问题。</p>`,
      labelData: [
        {
          id: 0,
          title: "鸡蛋生发"
        },
        {
          id: 1,
          title: "鸡蛋生发"
        },
        {
          id: 2,
          title: "鸡蛋生发"
        },
        {
          id: 3,
          title: "鸡蛋生发"
        },
        {
          id: 4,
          title: "鸡蛋生发"
        },
        {
          id: 5,
          title: "鸡蛋生发"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/article.less"></style>
