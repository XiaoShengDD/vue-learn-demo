import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/sync',
    name: 'sync',
    label: "sync",
    component: () => import('@/view/sync')
}, ]

const router = new VueRouter({
    mode: "hash",
    routes
})

export default router