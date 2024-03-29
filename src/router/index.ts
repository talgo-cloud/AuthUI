import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: '/register' },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  ]
})

export default router
