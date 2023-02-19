import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavBar from '@/components/NavBar.vue'
import PageLayout from '@/components/PageLayout.vue'

Vue.config.productionTip = false

Vue.component('NavBar', NavBar)
Vue.component('PageLayout', PageLayout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
