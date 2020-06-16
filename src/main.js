import Vue from 'vue'
import App from './App.vue'
import BootstarpVue from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(BootstarpVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
