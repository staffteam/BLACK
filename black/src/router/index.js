import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import NotFound from '@/components/home/NotFound'
import Product from '@/components/product/Product'
import ProductDetails from '@/components/product/ProductDetails'
import Article from '@/components/Article/Article'
import ArticleDetails from '@/components/Article/ArticleDetails'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    }, {
      path: '/index.html',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: '抱歉，您访问的页面不存在'
      }
    }, {
      path: '/product.html',
      name: 'Product',
      component: Product,
      meta: {
        title: '产品介绍'
      }
    }, {
      path: '/productDetails.html',
      name: 'ProductDetails',
      component: ProductDetails,
      meta: {
        title: '产品详情'
      }
    }, {
      path: '/article.html',
      name: 'article',
      component: Article,
      meta: {
        title: '品牌动态'
      }
    }, {
      path: '/articleDetails.html',
      name: 'ArticleDetails',
      component: ArticleDetails,
      meta: {
        title: '品牌动态'
      }
    }
  ]
})
