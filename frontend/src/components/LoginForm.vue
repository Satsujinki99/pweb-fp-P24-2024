<template>
    <form @submit.prevent="handleLogin" class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <div class="mb-6">
        <label for="username" class="block text-sm font-medium text-gray-700">Username:</label>
        <input type="text" v-model="username" required class="mt-2 block w-full border border-gray-300 rounded-md p-4 mb-4" />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
        <input type="password" v-model="password" required class="mt-2 block w-full border border-gray-300 rounded-md p-4 mb-4" />
      </div>
      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">Login</button>
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
  
          // Simpan token dan role di localStorage
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('role', response.data.data.role); // Simpan role pengguna
          // Emit event untuk memberi tahu bahwa login berhasil
          emit('login-success');
          // Arahkan ke halaman home setelah login
          window.location.href = '/home'; // Ganti dengan rute home
        } catch (error) {
          alert('Login gagal. Silakan coba lagi.');
        }
      };
  
      return { username, password, handleLogin };
    },
  };
  </script>
  
  <style>
  /* Tambahkan gaya sesuai kebutuhan */
  </style>