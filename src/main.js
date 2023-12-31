import Vue from 'vue';
import App from './App.vue';

//style
import "./style/global.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
