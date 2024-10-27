<template>
  <div>
    <div class="tabs">
      <button @click="activeTab = 'open'">Open</button>
      <button @click="activeTab = 'done'">Done</button>
      <button @click="activeTab = 'history'">History</button>
    </div>

    <div v-if="activeTab === 'open'">
      <OrderList :orders="openOrders" title="Open Orders" />
    </div>
    <div v-if="activeTab === 'done'">
      <OrderList :orders="doneOrders" title="Completed Orders" />
    </div>
    <div v-if="activeTab === 'history'">
      <OrderList :orders="historyOrders" title="Order History" />
    </div>
  </div>
</template>

<script>
import OrderList from '@/components/OrderList.vue'
import orderService from '@/services/orderService.js'

export default {
  components: {
    OrderList,
  },
  data() {
    return {
      activeTab: 'open',
      openOrders: [],
      doneOrders: [],
      historyOrders: [],
    };
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await orderService.getOrders();
        const orders = response.data;
        
        // Filter orders op basis van status
        this.openOrders = orders.filter(order => order.status === 'open');
        this.doneOrders = orders.filter(order => order.status === 'done');
        this.historyOrders = orders.filter(order => order.status === 'history');
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Voeg hier specifieke stijlen toe als nodig */
</style>
