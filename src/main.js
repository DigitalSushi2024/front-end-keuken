import Vue from 'vue';
import App from './App.vue';
import router from './router/routerConfig.js';
import './assets/styles.css'; // Voeg globale styles toe

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
