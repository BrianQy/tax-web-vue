import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
