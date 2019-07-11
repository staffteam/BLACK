<template>
  <div id="articles">
    <el-image class="streamer" :src="streamerUrl" fit="scale-down"></el-image>
    <!-- 搜索 -->
    <div id="homeSearch">
      <div class="l">
        <span>热门搜索关键词：</span>
        <a :href="`/searchs.html?value=${item.name}`" v-for="(item,index) in searchData" :key="index" target="_blank">{{item.name}}</a>
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
          <li v-for="item in articleData" :key="item.article_id">
            <a
              :href="`/articleDetails.html?parentid=${parentid}&id=${item.article_id}`"
              target="_blank"
            >
              <el-image class="listImg" :src="item.img_url" fit="scale-down"></el-image>
              <div class="listContent">
                <h2>{{item.title}}</h2>
                <p>
                  <span>
                    <i class="el-icon-time"></i>
                    {{item.date}}
                  </span>
                  <span>
                    <i class="el-icon-view"></i>
                    {{item.stat}}
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
        <el-pagination background layout="prev, pager, next" :total="10" :current-page="4"></el-pagination>
      </div>
      <div class="r">
        <div class="list">
          <ul>
            <li
              v-for="item in articleNavData"
              :key="item.menu_id"
              :data-key="item.menu_id"
              :class="`${item.on}`"
            >
              <a :href="articleNav[item.menu_id]">
                <h2>{{item.name}}</h2>
              </a>
            </li>
          </ul>
        </div>
        <div class="recommen">
          <div class="title">推荐搭配</div>
          <ul>
            <li v-for="item in recommenData" :key="item.article_id">
              <a
                :href="`/articleDetails.html?parentid=${parentid}&id=${item.article_id}`"
                target="_blank"
              >
                <h2>{{item.title}}</h2>
                <p>{{item.date}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/http.js";
export default {
  name: "articles",
  data() {
    return {
      parentid: "",
      streamerUrl: require("@/assets/images/streamer_article.png"),
      searchData: [],
      articleData: [],
      articleNavData: [],
      articleNav: {
        0: "/index.html",
        64: "/product.html",
        84: "/article.html",
        81: "/hairgeme.html",
        82: "/guide.html",
        80: "/welfafe.html",
        50: "/aboutus.html",
        143: "/media.html",
        144: "/faq.html"
      },
      recommenData: []
    };
  },
  methods: {},
  mounted() {
    let the = this;
    //文章列表
    http
      .fetchGet("/api/Article/Articles", {
        args: {
          start: 0,
          limit: 10,
          sort: "sortorder asc,releasetime",
          dir: "desc",
          IsRelease: true,
          NavCode: "Welfare"
        }
      })
      .then(data => {
        let datas = JSON.parse(data.data);
        if (datas.errcode) {
          datas.result.map(obj => {
            obj.img_url = http.path + "/" + obj.img_url;
          });
          the.articleData = datas.result;
        }
      })
      .catch(err => {
        console.log(err);
      });
    //推荐搭配
    http
      .fetchGet("/api/Article/Articles", {
        args: {
          start: 0,
          limit: 5,
          sort: "sortorder asc,releasetime",
          dir: "desc",
          IsRelease: true,
          NavCode: "Welfare"
        }
      })
      .then(data => {
        let datas = JSON.parse(data.data);
        if (datas.errcode) {
          datas.result.map(obj => {
            obj.img_url = http.path + "/" + obj.img_url;
          });
          the.recommenData = datas.result;
        }
      })
      .catch(err => {
        console.log(err);
      });

    //导航分类
    http
      .fetchGet("/api/Article/MenuArticle")
      .then(data => {
        let datas = JSON.parse(data.data);
        if (datas.errcode) {
          datas.result.map((obj, index) => {
            if (the.$route.query.id == obj.menu_id) {
              obj.on = "on";
              the.parentid = the.$route.query.id;
            }
            if (!the.$route.query.id && obj.menu_id == 80) {
              obj.on = "on";
              the.parentid = obj.menu_id;
            } else {
              obj.on = "";
            }
          });
          the.articleNavData = datas.result;
        }
      })
      .catch(err => {
        console.log(err);
      });
      //搜索关键词
    http
      .fetchGet("/api/Article/Labels", {
        args: {
          start: 0,
          limit: 5,
          sort: "sortorder asc,hotsearchtime",
          dir: "desc",
          TypeCode: "Label",
          IsHotSearch: true
        }
      })
      .then(data => {
        let datas = JSON.parse(data.data);
        if (datas.errcode) {
          the.searchData = datas.result;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/article.less"></style>
