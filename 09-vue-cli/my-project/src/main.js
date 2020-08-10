import Vue from 'vue'
import App from './App.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: function (c) {
  //   return c(App);
  // }
  // 通过render来渲染，可以覆盖Vue的控制区域
  render: (c) => c(App)
})