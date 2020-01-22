import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/editmayor',
    name: 'editmayor',
    component: () => import('@/components/service/EditMayor.vue')
  },
  {
    path: '/editminor',
    name: 'editminor',
    component: () => import('@/components/service/EditMinor.vue')

  },
  {
    path: '/daftarbiaya',
    name: 'daftarbiaya',
    component: () => import('@/components/service/DaftarBiaya.vue')
  },
   {
    path: '/publikasiartikel',
    name: 'publikasiartikel',
    component: () => import('@/components/service/PublikasiArtikel.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
