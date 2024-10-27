import Vue from 'vue';
import Router from 'vue-router';
import OrderPage from '@/views/OrderPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'OrderPage',
      component: OrderPage
    }
  ]
});
