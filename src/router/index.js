import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/main-page.vue'
import liquids from '../views/liquids-catalog.vue'
import recipe from '../views/recipe-page.vue'
import calc from '../views/calc-page.vue'
import account from '../views/account-page.vue'
import cart from '../views/cart-page.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/liquids',
    name: 'liquids',
    component: liquids
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: recipe
  },
  {
    path: '/calc',
    name: 'calc',
    component: calc
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
