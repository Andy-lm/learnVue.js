import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import One from "../components/One.vue"
import Two from "../components/Two.vue"
const routes = [
    { path: '/one', component: One },
    { path: '/two', component: Two }
]

const router = new VueRouter({
    routes
})

export default router
