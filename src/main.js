<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
=======
import Vue from 'vue';
import App from './App.vue';
import router from './router/routerConfig.js';
import './assets/styles.css'; // Voeg globale styles toe

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
>>>>>>> dae933a815a7ebac0f49357ef1c1062f7458962c
