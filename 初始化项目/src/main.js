import Vue from 'vue'
import Layout from './Layout'
import router from './router'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
