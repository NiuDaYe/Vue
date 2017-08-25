// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

fastclick.attach(document.boby);

import './common/css/index.scss';

Vue.config.productionTip = false  //阻止 vue 在启动时生成生产提示。
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
