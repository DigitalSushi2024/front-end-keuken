<template>
    <div :class="['order-card', order.status.toLowerCase()]">
      <div :class="['order-header', getDurationClass()]">
        <div class="order-header">
          <h3>Table {{ order.table }}</h3>
          <span>{{ order.orderId }}</span>
        </div>
        <div class="order-time">
          <span>{{ order.orderTime }}</span>
          <span>{{ order.duration }}</span>
        </div>
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
      <button class="done-button" @click="$emit('toggle-status')">
        {{ order.status === 'Open' ? 'Done' : 'Undo' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      order: Object
    },
    methods: {
      getDurationClass() {
        const minutes = parseInt(this.order.duration.match(/\d+/)?.[0] || 0);

        if (minutes < 5) {
          return "green-header";
        } else if (minutes >= 5 && minutes < 10) {
          return "orange-header";
        } else {
          return "red-header";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import "../styles/OrderCard.css";
  </style>
  