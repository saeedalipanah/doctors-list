import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegistrationView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 } // Scroll to top on route change
  }
})

export default router
