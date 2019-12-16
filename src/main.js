import Vue from 'vue'
import App from './App.vue'
import Layout from '@/views/Layout.vue'
import router from './router'

// Import directly icons from Vue Material Design
import 'vue-md-icons/src/icons'
import Icon from 'vue-md-icons/src/components/Icon'

// Import Boostrap Vue
import BootstrapVue from 'bootstrap-vue'

Vue.component('Layout', Layout)
Vue.component('Icon', Icon)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
