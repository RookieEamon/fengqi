import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// 注册全局组件分页器
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
