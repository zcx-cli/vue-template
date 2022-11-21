import Vue from 'vue'
import VueRouter from "vue-router";
import router from "./router";
import store from './store';
import App from './App.vue'
import './assets/tailwind.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueRouter)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  // error: require('./assets/img/error.jpg'),
  // loading: require('./assets/img/homePage_top.jpg'),
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
