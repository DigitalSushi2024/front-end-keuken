<template>
    <div id="app">
      <OrderPage />
    </div>
  </template>
  
  <script>
  import OrderPage from './views/OrderPage.vue';
  import "@/styles/global.css"; // Dit importeert de globale stijlen

  export default {
    components: {
      OrderPage
    }
  };
  </script>
  
  <style>
  /* Basis CSS */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  </style>
  