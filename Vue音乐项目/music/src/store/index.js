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
  // state: {
  //   isFullScreen:false
  // },
  // 用于保存修改全局共享数据的方法
  mutations:mutations,
  // mutations: {
  //   changeFullScreen(state,flag) {
  //     state.isFullScreen = flag;
  //   }
  // },
  // 触发mutations中方法的方法
  actions:actions,
  // actions: {
  //   setFullScreen({commit},flag) {
  //     commit('changeFullScreen', flag);
  //   }
  // },
  getters:getters
  // getters: {
  //   isFullScreen(state) {
  //     return state.isFullScreen;
  //   }
  // }
})
