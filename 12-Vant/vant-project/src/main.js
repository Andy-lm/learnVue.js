import Vue from 'vue'
import App from './App.vue'
import { NavBar, Card, SubmitBar } from 'vant';
Vue.use(NavBar);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App)
})
