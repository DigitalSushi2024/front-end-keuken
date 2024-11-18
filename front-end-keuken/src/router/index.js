import { createRouter, createWebHistory } from 'vue-router';
import OrderPage from '@/views/OrderPage.vue'; // Order Page
import ActiveSessions from '@/views/ActiveSessionsView.vue'; // Active Sessions Page

const routes = [
  { path: '/', name: 'OrderPage', component: OrderPage }, // Default Route
  { path: '/Sessions', name: 'Sessions', component: ActiveSessions }, // Active Sessions Route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
