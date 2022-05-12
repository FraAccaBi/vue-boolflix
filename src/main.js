import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

Vue.use(rate)
Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
