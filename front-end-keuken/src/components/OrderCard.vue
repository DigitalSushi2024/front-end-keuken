<template>
    <div :class="['order-card', order.status.toLowerCase()]">
      <div class="order-header">
        <h3>Table {{ order.table }}</h3>
        <span>{{ order.orderId }}</span>
      </div>
      <div class="order-time">
        <span>{{ order.orderTime }}</span>
        <span>{{ order.duration }}</span>
      </div>
      <ul class="order-items">
        <li v-for="item in order.items" :key="item.id">
          <span>{{ item.quantity }}x</span>
          <span>{{ item.name }}</span>
          <input 
            type="checkbox" 
            :checked="item.completed" 
            @change="$emit('toggle-item', item.id)" 
          />
        </li>
      </ul>
      <button @click="$emit('toggle-status')">
        {{ order.status === 'Open' ? 'Done' : 'Undo' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      order: Object
    }
  };
  </script>
  
  <style scoped>
  @import "../styles/OrderCard.css"; /* Adjusted path */
  </style>
  