<template>
    <nav>
      <div>
        <h2>Welcome, {{ username }}</h2>
        <button @click="logout">Logout</button>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    emits: ['logout'],
    setup(_, { emit }) {
      const router = useRouter();
      const username = computed(() => {
        const token = localStorage.getItem('token');
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          return payload.username; // Ambil username dari token
        }
        return '';
      });
  
      const logout = () => {
        localStorage.removeItem('token');
        emit('logout'); // Emit event logout
        router.push('/'); // Kembali ke halaman login
      };
  
      return { username, logout };
    },
  });
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f8f9fa;
  }
  </style>
  