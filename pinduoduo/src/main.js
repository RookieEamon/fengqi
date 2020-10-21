import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/Store'
Vue.config.productionTip = false


router.afterEach((to, from, next) => {
Vue.use(ElementUI)
  window.scrollTo(0, 0);
});

import { Pagination } from 'element-ui';
Vue.use(Pagination)
// Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
