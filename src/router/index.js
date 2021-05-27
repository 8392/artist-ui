import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import rightdialog from '../views/rightdialog.vue'
import poper from '../views/poper.vue'
import treePage from '../views/treePage/index.vue'
import tab from '../views/tab/index.vue'
import ele from '../views/components/ele.vue'
import dayFill from '../views/dayFill/index.vue'
import createEle from '../views/createEle/a.js'

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
    path: '/treePage',
    name: 'treePage',
    component: treePage
  },
  {
    path: '/tab',
    name: 'tab',
    component: tab
  },
  {
    path: '/ele',
    name: 'ele',
    component: ele
  },
  {
    path: '/dayFill',
    name: 'dayFill',
    component: dayFill
  },
  {
    path: '/createEle',
    name: 'createEle',
    component: createEle
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
