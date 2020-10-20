import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/Store'
Vue.config.productionTip = false
router.afterEach((to, from, next) => {

  window.scrollTo(0, 0);

});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
