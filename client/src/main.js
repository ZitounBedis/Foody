// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import VueRouter from 'vue-router';
import JQuery from 'jquery'
window.$ = JQuery
Vue.filter('to-uppercase' ,function(value){
return value.toUpperCase()
});
Vue.use(Vuesax)

Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
