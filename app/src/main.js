import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import '../src/mockApi'
Vue.use(Vant);
Vue.config.productionTip = false
import '@/assets/css/reset.css'
import '@/assets/css/base.css'
import '../src/mockApi'
import axios from 'axios'
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
