<template>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    emits: ['login-success'],
    setup(_, { emit }) {
      const username = ref('');
      const password = ref('');
  
      const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:3001/auth/login', {
            username: username.value,
            password: password.value,
          });
  
          // Simpan token di localStorage
          localStorage.setItem('token', response.data.data.token);
          // Emit event untuk memberi tahu bahwa login berhasil
          emit('login-success');
        } catch (error) {
          if (axios.isAxiosError(error)) {
            alert(error.response?.data.message || 'Terjadi kesalahan saat login');
          } else {
            console.error('Terjadi kesalahan:', error);
          }
        }
      };
  
      return { username, password, handleLogin };
    },
  };
  </script>
  
  <style>
  /* Tambahkan gaya sesuai kebutuhan */
  </style>