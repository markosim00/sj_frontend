import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(new VueSocketIO({
  debug: false,
  connection: 'ws://127.0.0.1:8000'
}));

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
