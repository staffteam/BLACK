const axios = require('axios')

axios.defaults.timeout = 20000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = ''; //配置接口地址

let path = 'http://ht.lexilisi.com';

let the = {
  productData: [],
  articleData: [],
  articleData1: [],
  articleData2: [],
  articleData3: [],
  articleData4: [],
  webW: 12,
  webL: 6,
  navList: {
    0: "/index",
    64: "/product",
    84: "/article",
    81: "/hairgene",
    82: "/guide",
    80: "/welfare",
    50: "/aboutus",
    143: "/media",
    144: "/faq"
  },
  navData: [],
  faqData: [],
  logoUrl: '',
  i: 0
}


let _routes_ = async function () {
  let _routes = ["/sitemap"];
  let data1 = await axios({
    method: "get",
    url: path + "/api/Home/Menu"
  });

  let datas = JSON.parse(data1.data);
  if (datas.errcode) {
    the.logoUrl = path + "/" + datas.result.logo_url;
    the.navData = [{
        menu_id: 0,
        name: "首页",
        name_en: "HOME"
      },
      ...datas.result.menus
    ];
  }
  the.navData.forEach(function (item) {
    _routes.push(the.navList[item.menu_id]);
  });
  //产品列表
  let data2 = await axios({
    method: "get",
    url: path +
      "/api/Article/Products?args=" +
      JSON.stringify({
        start: 0,
        limit: 999,
        sort: "sortorder asc,releasetime",
        dir: "desc",
        IsRelease: true
      })
  });
  let data2s = JSON.parse(data2.data);
  if (data2s.errcode) {
    the.productData = data2s.result.products;
  }
  //品牌动态
  let data3 = await axios({
    method: "get",
    url: path +
      "/api/Article/Articles?args=" +
      JSON.stringify({
        start: 0,
        limit: 999,
        sort: "sortorder asc,releasetime",
        dir: "desc",
        IsRelease: true,
        NavCode: "News"
      })
  });
  let data3s = JSON.parse(data3.data);
  if (data3s.errcode) {
    the.articleData = data3s.result.products;
  }

  //脱发指南
  let data4 = await axios({
    method: "get",
    url: path +
      "/api/Article/Articles?args=" +
      JSON.stringify({
        start: 0,
        limit: 999,
        sort: "sortorder asc,releasetime",
        dir: "desc",
        IsRelease: true,
        NavCode: "Guide"
      })
  });
  let data4s = JSON.parse(data4.data);
  if (data4s.errcode) {
    the.articleData1 = data4s.result.products;
  }
  //粉丝福利
  let data5 = await axios({
    method: "get",
    url: path +
      "/api/Article/Articles?args=" +
      JSON.stringify({
        start: 0,
        limit: 999,
        sort: "sortorder asc,releasetime",
        dir: "desc",
        IsRelease: true,
        NavCode: "Welfare"
      })
  });
  let data5s = JSON.parse(data5.data);
  if (data5s.errcode) {
    the.articleData2 = data5s.result.products;
  }
  //媒体报道
  let data6 = await axios({
    method: "get",
    url: path +
      "/api/Article/Articles?args=" +
      JSON.stringify({
        start: 0,
        limit: 999,
        sort: "sortorder asc,releasetime",
        dir: "desc",
        IsRelease: true,
        NavCode: "MediaNews"
      })
  });
  let data6s = JSON.parse(data6.data);
  if (data6s.errcode) {
    the.articleData3 = data6s.result.products;
  }
  //基因育发
  let data7 = await axios({
    method: "get",
    url: path +
      "/api/Article/Articles?args=" +
      JSON.stringify({
        start: 0,
        limit: 999,
        sort: "sortorder asc,releasetime",
        dir: "desc",
        IsRelease: true,
        NavCode: "Hair"
      })
  });
  let data7s = JSON.parse(data7.data);
  if (data7s.errcode) {
    the.articleData4 = data7s.result.products;
  }
  //常见问题
  let data8 = await axios({
    method: "get",
    url: path +
      "/api/Article/Faqs?args=" +
      JSON.stringify({
        sort: "sortorder asc,releasetime",
        dir: "desc",
        NavCode: "Faq",
        IsRelease: true
      })
  });
  let data8s = JSON.parse(data8.data);
  if (data8s.errcode) {
    the.faqData = data8s.result.products;
  }

  the.productData.forEach(function (item) {
    _routes.push(`/productDetails/${item.product_id}.html`);
  });
  the.articleData.forEach(function (item) {
    _routes.push(`/articleDetails/82/${item.article_id}.html`);
  });
  the.articleData1.forEach(function (item) {
    _routes.push(`/articleDetails/84/${item.article_id}.html`);
  });
  the.articleData2.forEach(function (item) {
    _routes.push(`/articleDetails/80/${item.article_id}.html`);
  });
  the.articleData3.forEach(function (item) {
    _routes.push(`/articleDetails/143/${item.article_id}.html`);
  });
  the.articleData4.forEach(function (item) {
    _routes.push(`/articleDetails/81/${item.article_id}.html`);
  });
  the.faqData.forEach(function (item) {
    _routes.push(
      `/faqDetails/${item.parent_type_id}/${item.type_id}/${item.article_id}.html`
    );
  });
  return _routes;
};
module.exports = {
  _routes_
};
