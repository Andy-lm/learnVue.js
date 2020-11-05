import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  // 用于保存全局共享的数据
  state:state,
  mutations:mutations,
  actions:actions,
  getters:getters
})
