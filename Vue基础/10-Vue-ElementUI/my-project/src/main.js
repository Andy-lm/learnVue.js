import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
// 完整引入我们的饿了么UI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
// 按需引入我们的饿了么UI
import { Button, Row, Rate } from 'element-ui';
Vue.use(Button);
Vue.use(Row);
Vue.use(Rate);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  // render: function (c) {
  //   return c(App);
  // }
  // 通过render来渲染，可以覆盖Vue的控制区域
  render: (c) => c(App)
})