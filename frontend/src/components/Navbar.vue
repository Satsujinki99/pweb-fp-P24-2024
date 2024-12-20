<template>
    <nav>
      <div>
        <h2>Welcome, {{ username }}</h2>
        <button @click="logout">Logout</button>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      const username = computed(() => {
        const userData = localStorage.getItem('token');
        if (userData) {
          const payload = JSON.parse(atob(userData.split('.')[1]));
          return payload.username; // Ambil username dari token
        }
        return '';
      });
  
      const logout = () => {
        localStorage.removeItem('token');
        router.push('/');
      };
  
      return { username, logout };
    },
  };
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f8f9fa;
  }
  </style>
  