import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import FilActualite from '../components/home-page/FilActualite.vue'
import EventPage from '../views/EventPage.vue'
import Recherche from '../components/home-page/Recherche.vue'
import Messagerie from '../components/home-page/Messagerie.vue'
import Abonnements from '../components/home-page/Abonnements.vue'
import CreationEvent from '../components/home-page/CreationEvent'
import ConvPage from '../views/ConvPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'home',
    component: FilActualite
  },
  {
    path: '/event/:id',
    name: 'event',
    component: EventPage
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component: ConvPage
  }, 
  {
    path: '/search',
    name: 'search',
    component: Recherche
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messagerie
  },
  {
    path: '/subscribers',
    name: 'subscribers',
    component: Abonnements
  },
  {
    path: '/createEvent',
    name: 'createEvent',
    component: CreationEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
