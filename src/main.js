import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false;

// axios is not configured! no back end so this won't work!
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
