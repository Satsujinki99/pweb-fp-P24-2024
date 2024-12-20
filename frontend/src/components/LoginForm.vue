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
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
      const router = useRouter();
  
      const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:3001/auth/login', {
            username: username.value,
            password: password.value,
          });
  
          // Simpan token di localStorage
          localStorage.setItem('token', response.data.data.token);
          // Navigasi ke homepage
          router.push('/home');
        } catch (error) {
          if (axios.isAxiosError(error)) {
            // Menangani kesalahan dari Axios
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
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  