import { createRouter, createWebHashHistory } from 'vue-router'
import HeaderView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HeaderView
  },
  {
    path: '/vitamins',
    name: 'vitamins',
    component: () => import(/* webpackChunkName: "about" */ '../views/VitaminsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
