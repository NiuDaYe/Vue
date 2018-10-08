// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './Layout'
import router from './router'
import storeConfig from './vuex/store.js'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  storeConfig,
  components: { Layout },
  template: '<Layout/>'
})
