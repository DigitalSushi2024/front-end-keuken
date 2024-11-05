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
            {id: 1, quantity: 1, name: "Kappa maki", completed: true},
            {id: 2, quantity: 3, name: "Tamago nigiri", completed: true},
            {id: 3, quantity: 1, name: "Spring rolls", completed: false},
            {id: 4, quantity: 1, name: "Ebi tempura", completed: false}
          ],
          status: "Open"
        },
        {
          id: 2,
          table: 5,
          orderId: "#579KL12",
          orderTime: "17:12:30",
          duration: "12:10",
          items: [
            {id: 1, quantity: 2, name: "Salmon sushi", completed: true},
            {id: 2, quantity: 1, name: "Tuna roll", completed: false},
            {id: 3, quantity: 1, name: "Edamame", completed: false}
          ],
          status: "Open"
        },
        {
          id: 3,
          table: 7,
          orderId: "#340YN45",
          orderTime: "17:15:45",
          duration: "8:45",
          items: [
            {id: 1, quantity: 1, name: "Avocado roll", completed: true},
            {id: 2, quantity: 2, name: "Spicy tuna roll", completed: true},
            {id: 3, quantity: 1, name: "Miso soup", completed: false}
          ],
          status: "Open"
        },
        {
          id: 4,
          table: 8,
          orderId: "#673UI90",
          orderTime: "17:18:20",
          duration: "10:20",
          items: [
            {id: 1, quantity: 3, name: "California roll", completed: false},
            {id: 2, quantity: 1, name: "Tempura shrimp", completed: false},
            {id: 3, quantity: 1, name: "Gyoza", completed: true}
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
@import "../styles/OrderPage.css";

.orders-container {
  display: flex !important;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
}
</style>
