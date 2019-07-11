import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import NotFound from '@/components/home/NotFound'
import Product from '@/components/product/Product'
import ProductDetails from '@/components/product/ProductDetails'
import Article from '@/components/Article/Article'
import ArticleDetails from '@/components/Article/ArticleDetails'
import About from '@/components/about/About'
import Searchs from '@/components/searchs/Searchs'
import Faq from '@/components/faq/Faq'
import FaqSearch from '@/components/faq/FaqSearch'
import Hairgeme from '@/components/hairgeme/Hairgeme'
import Guide from '@/components/guide/Guide'
import Welfafe from '@/components/welfafe/Welfafe'
import Media from '@/components/media/Media'
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
    }, {
      path: '/aboutus.html',
      name: 'Aboutus',
      component: About,
      meta: {
        title: '关于我们'
      }
    }, {
      path: '/search.html',
      name: 'Searchs',
      component: Searchs,
      meta: {
        title: '搜索'
      }
    }, {
      path: '/faq.html',
      name: 'Faq',
      component: Faq,
      meta: {
        title: '常见问题'
      }
    }, {
      path: '/hairgeme.html',
      name: 'Hairgeme',
      component: Hairgeme,
      meta: {
        title: '基因育发'
      }
    }, {
      path: '/guide.html',
      name: 'Guide',
      component: Guide,
      meta: {
        title: '脱发指南'
      }
    }, {
      path: '/welfafe.html',
      name: 'Welfafe',
      component: Welfafe,
      meta: {
        title: '粉丝福利'
      }
    }, {
      path: '/faqSearch.html',
      name: 'FaqSearch',
      component: FaqSearch,
      meta: {
        title: '常见问题搜索结果'
      }
    }, {
      path: '/media.html',
      name: 'Media',
      component: Media,
      meta: {
        title: '媒体报道'
      }
    }
  ]
})
