<template>
    <nav class="bg-gray-800 p-4 sticky top-0 z-50">
      <div class="flex justify-between items-center">
        <h2 class="text-white text-lg">Welcome, {{ username }}</h2>
        <div class="flex items-center">
          <router-link to="/home" class="text-white hover:underline mr-4">Home</router-link>
          <router-link to="/rules" class="text-white hover:underline mr-4">Aturan Peminjaman</router-link>
          <router-link v-if="isAdmin" to="/admin" class="text-white hover:underline mr-4">Admin</router-link>
          <router-link to="/barang" class="text-white hover:underline mr-4">Barang</router-link> <!-- Tombol Barang -->
          <router-link to="/petugas" class="text-white hover:underline mr-4">Petugas</router-link> <!-- Tombol Petugas -->
          <router-link to="/data-peminjaman" class="text-white hover:underline mr-4">Data Peminjaman</router-link> <!-- Tombol Data Peminjaman -->
          <button @click="logout" class="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Logout</button>
        </div>
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
        const token = localStorage.getItem('token');
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          return payload.username; // Ambil username dari token
        }
        return '';
      });
  
      const isAdmin = computed(() => {
        const role = localStorage.getItem('role');
        return role === 'admin'; // Cek apakah pengguna adalah admin
      });
  
      const logout = () => {
        localStorage.removeItem('token'); // Hapus token dari localStorage
        localStorage.removeItem('role'); // Hapus role dari localStorage
        router.push('/'); // Kembali ke halaman login
      };
  
      return { username, isAdmin, logout };
    },
  };
  </script>
  
  <style scoped>
  /* Tidak ada styling tambahan di sini, semua menggunakan Tailwind CSS */
  </style>
  