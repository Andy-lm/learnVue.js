import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick';
import './assets/css/base.scss';
import VueLazyload from 'vue-lazyload'
import VConsole from "vconsole"
Vue.use(VueLazyload);
fastclick.attach(document.body);
Vue.use(VueLazyload, {
  loading:require('./assets/images/loading.png'),
})
Vue.config.productionTip = false;
const vconsole = new VConsole();
Vue.use(vconsole);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
