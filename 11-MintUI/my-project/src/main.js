import Vue from 'vue'
import App from './App.vue'
// 完整引入
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
// 按需引入
import { Button, Switch } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App)
})
