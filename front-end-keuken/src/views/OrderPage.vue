<template>
    <div>
      <TabMenu :activeTab="activeTab" @change-tab="changeTab" />
      <div class="orders-container">
        <OrderCard
          v-for="(order, index) in filteredOrders"
          :key="index"
          :order="order"
          @toggle-status="toggleOrderStatus(order)"
          @toggle-item="toggleOrderItem(order, $event)"
        />
      </div>
    </div>
  </template>
  
  <script>
  import TabMenu from "@/components/TabMenu.vue";
  import OrderCard from "@/components/OrderCard.vue";
  
  export default {
    components: {
      TabMenu,
      OrderCard
    },
    data() {
      return {
        activeTab: "Open",
        orders: [
          {
            id: 1,
            table: 4,
            orderId: "#268XH89",
            orderTime: "17:10:53",
            duration: "15:38",
            items: [
              { id: 1, quantity: 1, name: "Kappa maki", completed: true },
              { id: 2, quantity: 3, name: "Tamago nigiri", completed: true },
              { id: 3, quantity: 1, name: "Spring rolls", completed: false },
              { id: 4, quantity: 1, name: "Ebi tempura", completed: false }
            ],
            status: "Open"
          }
        ]
      };
    },
    computed: {
      filteredOrders() {
        return this.orders.filter(order => order.status === this.activeTab);
      }
    },
    methods: {
      changeTab(tab) {
        this.activeTab = tab;
      },
      toggleOrderStatus(order) {
        order.status = order.status === "Open" ? "Done" : "Open";
      },
      toggleOrderItem(order, itemId) {
        const item = order.items.find(item => item.id === itemId);
        if (item) item.completed = !item.completed;
      }
    }
  };
  </script>
  
  <style scoped>
  @import "../styles/OrderPage.css"; /* Adjusted path */
  .orders-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  </style>
  