import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.use( CKEditor );

Vue.config.productionTip = false
axios.defaults.headers.get['Accepts'] = 'application/json'
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log(error.response.data)
  // if (error.response.status === 401) {
    router.push('')
  // }
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
