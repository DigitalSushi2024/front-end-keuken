<template>
  <div>
    <h1>Active Sessions</h1>
    <ul v-if="sessions.length">
      <li v-for="session in sessions" :key="session.sessionId">
        <strong>Session ID:</strong> {{ session.sessionId }}<br>
        <strong>Start Time:</strong> {{ session.startTime }}<br>
        <strong>Table ID:</strong> {{ session.tableId }}
      </li>
    </ul>
    <p v-else>No active sessions found.</p>
  </div>
</template>

<script>
import { fetchActiveSessions } from '@/api/apiService';

export default {
  name: 'ActiveSessionsView',
  data() {
    return {
      sessions: [], // Holds the list of active sessions
    };
  },
  async created() {
    try {
      const response = await fetchActiveSessions(); // Call the API
      this.sessions = response.$values || []; // Extract the $values array
    } catch (error) {
      console.error('Failed to fetch active sessions:', error);
    }
  },
};
</script>

<style scoped>
h1 {
  color: #333;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}
strong {
  color: #555;
}
</style>
