import Vue from 'vue'
import App from './App.vue'

// import Loading from "./components/Loading.vue"
// Vue.component(Loading.name, Loading);
import Loading from "./plugin/loading/index.js"
Vue.use(Loading, {
  title: "正在加载"
});

Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(App)
})
