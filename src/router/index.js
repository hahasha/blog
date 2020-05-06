import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import About from '@/pages/about/about'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
