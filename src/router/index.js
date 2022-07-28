import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search.vue')
  },

  {
    path: '/',
    name: 'List',
    component: () => import('../views/List.vue')
  },


  
]

const router = new VueRouter({
  routes
})

export default router
