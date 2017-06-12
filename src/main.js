// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = 'https://fir-auth-vue-1b584.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
