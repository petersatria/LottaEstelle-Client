import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailProductView from '../views/DetailProductView.vue'
import CartsView from '../views/CartsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products/:id',
      name: 'detail-product',
      component: DetailProductView
    },
    {
      path: '/carts',
      name: 'carts',
      component: CartsView
    },
  ]
})

export default router