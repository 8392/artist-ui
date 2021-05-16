import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import rightdialog from '../views/rightdialog.vue'
import poper from '../views/poper.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rightdialog',
    name: 'rightdialog',
    component: rightdialog
  },
  {
    path: '/poper',
    name: 'poper',
    component: poper
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
