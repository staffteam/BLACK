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
    <div class="articlelist">
      <div class="l">
        <ul>
          <li v-for="item in articleData" :key="item.id">
            <a :href="`/articleDetails.html?id=${item.id}`" target="_blank">
              <el-image class="listImg" :src="item.imgUrl" fit="scale-down"></el-image>
              <div class="listContent">
                <h2>{{item.title}}</h2>
                <p>
                  <span>
                    <i class="el-icon-time"></i>
                    {{item.time}}
                  </span>
                  <span>
                    <i class="el-icon-view"></i>
                    {{item.view}}
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
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
      </div>
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
          id: 0,
          time: "2019-05-20",
          view: "11",
          imgUrl: require("@/assets/images/article_list_1.png")
        },
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
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/article.less"></style>
