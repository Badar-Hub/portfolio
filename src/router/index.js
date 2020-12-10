import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/brands',
    name: 'Brands',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/brands.vue')
  },
  {
    path: '/contact-us',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  },
  {
    path: '/cosmetics',
    name: 'cosmetics',
    component: () => import( '../views/Cosmetics.vue')
  },
  {
    path: '/Multivitamin',
    name: 'Multivitamin',
    component: () => import( '../views/Multivitamin.vue')
  },
  {
    path: '/Footwear',
    name: 'Footwear',
    component: () => import( '../views/Footwear.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
