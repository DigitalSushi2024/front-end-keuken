<template>
  <div id="app">
    <router-view /> <!-- Dynamically renders the active route -->
  </div>
</template>

<script>
export default {
  name: 'App',
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
