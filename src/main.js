import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import vuetify from './plugins/vuetify';
import Axios from 'axios'
import moment from "moment";
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
window.moment = moment()
moment.locale("th")
window.baseURL = 'http://127.0.0.1:8000/'
window.axios = new Axios.create({
    baseURL: baseURL,
    timeout: 10000
})
if (localStorage.getItem('access_token')) {
    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('access_token')}`;
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
