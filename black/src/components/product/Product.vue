<template>
  <div id="product">
    <el-image class="streamer" :src="streamerUrl" fit="scale-down"></el-image>
    <div class="productList">
      <ul>
        <li v-for="item in productData" :key="item.id">
          <a :href="`/productDetails.html?id=${item.id}`" target="_blank">
            <el-image class="listImg" :src="item.imgUrl" fit="scale-down"></el-image>
            <div class="listContent">
              <h2>{{item.title}}</h2>
              <div v-html="item.describe">{{item.describe}}</div>
              <span>查看详情+</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      streamerUrl: require("@/assets/images/streamer_product.png"),
      productData: [
        {
          title: "乐喜力丝育发液",
          id: 0,
          describe: "100ml<br/>防脱育发 滋养头皮 激活毛囊",
          imgUrl: require("@/assets/images/home_list_2_1.png")
        },
        {
          title: "乐喜力丝育发液",
          id: 0,
          describe: "100ml<br/>防脱育发 滋养头皮 激活毛囊",
          imgUrl: require("@/assets/images/home_list_2_2.png")
        },
        {
          title: "乐喜力丝育发液",
          id: 0,
          describe: "100ml<br/>防脱育发 滋养头皮 激活毛囊",
          imgUrl: require("@/assets/images/home_list_2_3.png")
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="../../assets/less/product.less"></style>
