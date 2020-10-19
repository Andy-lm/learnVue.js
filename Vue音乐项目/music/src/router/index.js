import Vue from 'vue'
import VueRouter from 'vue-router'
// import Recommend from '../views/Recommend'
// import Rank from '../views/Rank'
// import Singer from '../views/Singer'
// import Search from '../views/Search'
// 实现异步按需加载
const Recommend = (resolve) => {
  import('../views/Recommend').then(function(module) {
    resolve(module);
  })
}
const Detail = (resolve) => {
  import('../views/Detail').then(function(module) {
    resolve(module);
  })
}


const Rank = (resolve) => {
  import('../views/Rank').then(function(module) {
    resolve(module);
  })
}
const Singer = (resolve) => {
  import('../views/Singer').then(function(module) {
    resolve(module);
  })
}
const Search = (resolve) => {
  import('../views/Search').then(function(module) {
    resolve(module);
  })
}
const Account = (resolve) => {
  import('../views/Account').then(function(module) {
    resolve(module);
  })
}

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend'},
  {
    path: '/recommend',
    component: Recommend,
    children: [ // 配置子组件
      {
        path: 'detail/:id/:type',
        component:Detail
      }
    ]
  },
  { path: '/rank', component: Rank },
  { path: '/singer', component: Singer },
  { path: '/search', component: Search },
  { path: '/account', component: Account }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
