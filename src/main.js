import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入elementui插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 导入插件
Vue.use(ElementUI)

new Vue({
  router,
  // 渲染App的网页，并把vue对象挂载到app上
  render: h => h(App)
}).$mount('#app')
