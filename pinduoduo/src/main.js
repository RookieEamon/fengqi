import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/Store'
import ElementUI from 'element-ui';
<<<<<<< HEAD
import { Button, Select } from 'element-ui';
=======
>>>>>>> 1b4d95bc938c853d6b8c96f5005e410457b51121
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Carousel)
Vue.use(Pagination)
Vue.config.productionTip = false
import { Pagination } from 'element-ui';
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
