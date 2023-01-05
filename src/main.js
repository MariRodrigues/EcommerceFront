import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import bootstrap from './bootstrap'

Vue.config.productionTip = false
Vue.use(bootstrap)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
