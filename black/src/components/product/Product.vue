<template>
  <div id="product">
    <el-image class="streamer" :src="streamerUrl" fit="scale-down"></el-image>
    <div class="productList">
      <ul>
        <li v-for="item in productData" :key="item.product_id">
          <a :href="`/productDetails.html?id=${item.product_id}`" target="_blank">
            <el-image class="listImg" :src="item.img_url" fit="scale-down"></el-image>
            <div class="listContent">
              <h2>{{item.name}}</h2>
              <div v-html="item.function">
                {{item.size}}
                <br />
                {{item.function}}
              </div>
              <span>查看详情+</span>
            </div>
          </a>
        </li>
      </ul>
      <el-pagination background layout="prev, pager, next" :total="10" :current-page="4"></el-pagination>
    </div>
  </div>
</template>

<script>
import http from "@/http.js";
export default {
  name: "product",
  data() {
    return {
      streamerUrl: require("@/assets/images/streamer_product.png"),
      productData: []
    };
  },
  methods: {},
  mounted() {
    let the = this;
    //产品列表
    http
      .fetchGet("/api/Article/Products", {
        args: {
          start: 0,
          limit: 10,
          sort: "sortorder asc,releasetime",
          dir: "desc",
          IsRelease: true
        }
      })
      .then(data => {
        let datas = JSON.parse(data.data);
        if (datas.errcode) {
          datas.result.map(obj => {
            obj.img_url = http.path + "/" + obj.img_url;
          });
          the.productData = datas.result;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/product.less"></style>
