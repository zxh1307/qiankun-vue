import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/linjunjie',
    name: 'linjunjie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Linjunjie.vue')
  },
  {
    path: '/zhangyixin',
    name: 'zhangyixin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Zhangyixin.vue')
  }
]

export default routes
