// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from '@/components/leader/Header'
import Footer from '@/components/leader/Footer'
import router from './router'
import ElementUI from 'element-ui'
Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.component('black-head', Header)
Vue.component('black-footer', Footer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
