import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


axios.defaults.baseURL='http://123.207.32.32:8000'//全局设置
axios.defaults.timeout=5000 //单位是毫秒，5秒
axios({
  url:'/home/multidata'
}).then(res =>{
  console.log(res);
  console.error("ssss")
})
