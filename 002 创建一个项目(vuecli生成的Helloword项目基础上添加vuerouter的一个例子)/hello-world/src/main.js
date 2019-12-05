import Vue from 'vue'
import App from './App.vue'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入路由和路由配置
import VueRouter from 'vue-router'
import routerConfig from './router.config.js';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter(routerConfig); 

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
