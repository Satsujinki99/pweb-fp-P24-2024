<template>
  <div id="app">
    <Navbar v-if="isLoggedIn" @logout="handleLogout" /> <!-- Navbar hanya muncul jika sudah login -->
    <router-view /> <!-- Menampilkan konten berdasarkan rute -->
  </div>
</template>

<script lang="ts">
import { ref, watchEffect } from 'vue';
import Navbar from './components/Navbar.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Navbar,
  },
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(false); // Status login

    // Memantau perubahan pada token di localStorage
    watchEffect(() => {
      isLoggedIn.value = !!localStorage.getItem('token'); // Update status login
    });

    const handleLogout = () => {
      localStorage.removeItem('token'); // Hapus token dari localStorage
      isLoggedIn.value = false; // Ubah status login menjadi false
      router.push('/'); // Arahkan ke halaman login
    };

    return { isLoggedIn, handleLogout };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
