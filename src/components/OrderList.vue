<template>
  <div class="order-list">
    <h2>{{ title }}</h2>
    <div v-for="order in orders" :key="order.orderId" class="order-card">
      <h3>Table {{ order.tableNumber }} - Order #{{ order.orderId }}</h3>
      <p>Time: {{ order.timestamp }}</p>
      <ul>
        <li v-for="item in order.items" :key="item.name">
          {{ item.quantity }}x {{ item.name }}
        </li>
      </ul>
      <button v-if="order.status === 'open'" @click="markAsDone(order)">Done</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: Array,
    title: String,
  },
  methods: {
    markAsDone(order) {
      // API-aanroep om order als 'done' te markeren kan hier geplaatst worden
      order.status = 'done';
    }
  }
}
</script>

<style scoped>
/* Voeg hier specifieke stijlen toe als nodig */
</style>
