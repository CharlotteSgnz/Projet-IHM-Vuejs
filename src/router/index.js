import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import FormulaireInscription from '../components/login-page/FormulaireInscription.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/form-inscription',
    name: 'form-inscription',
    component: FormulaireInscription
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
