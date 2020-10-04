import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import vuetify from './plugins/vuetify';
import Axios from 'axios'

window.baseURL = 'http://127.0.0.1:8000/'
window.axios = new Axios.create({
    baseURL: baseURL,
    timeout: 10000
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
