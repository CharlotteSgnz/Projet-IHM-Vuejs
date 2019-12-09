import Vue from 'vue'
import App from './App.vue'
import Layout from '@/views/Layout.vue'
import router from './router'

Vue.component('Layout', Layout)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
