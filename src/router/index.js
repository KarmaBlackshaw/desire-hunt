import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home/Home.vue'

const lazyLoad = path => () => import(/* webpackChunkName: "about" */ `@/views/${path}.vue`)
const routes = [
  {
    path: '/',
    name: 'home/Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: lazyLoad('AboutUs')
  },
  {
    path: '/services',
    name: 'Services',
    component: lazyLoad('Services')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: lazyLoad('Blog')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
