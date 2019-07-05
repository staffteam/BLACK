import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import NotFound from '@/components/home/NotFound'
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
    }
  ]
})
