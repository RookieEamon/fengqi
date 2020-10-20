import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
<<<<<<< HEAD
import store from '@/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
=======
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// 注册全局组件分页器
>>>>>>> b1660279a6a833f5742a17e6f379279810f3c403
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
