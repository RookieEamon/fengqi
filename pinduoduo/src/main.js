import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/Store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import { Pagination } from 'element-ui';
Vue.use(Pagination)
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
