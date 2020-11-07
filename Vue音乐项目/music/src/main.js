import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick';
import './assets/css/base.scss';
import VueLazyload from 'vue-lazyload'
import VConsole from "vconsole"
import Loading from "./plugin/loading/index.js"
// 我们自定义的插件
Vue.use(Loading, {
  title: "正在加载"
});

// 移动端点击延迟的问题
fastclick.attach(document.body);
// 图片懒加载
Vue.use(VueLazyload, {
  loading:require('./assets/images/lazy-img.jpg'),
})
Vue.config.productionTip = false;
// 移动端打开控制台
const vconsole = new VConsole();
Vue.use(vconsole);
// 统一管理SEO标签
// import MetaInfo from 'vue-meta-info'
// Vue.use(MetaInfo)





new Vue({
  router,
  store,
  render: h => h(App),
  // // 预加载自动添加
  // mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
