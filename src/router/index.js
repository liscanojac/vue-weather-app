import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CityDetails from '../views/CityDetails'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path:'/cities/:id',
    name: 'CityDetails',
    component: CityDetails,
    // this let us accept as props in the CityDetails component and not to get it as data() 
    // props: true
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
