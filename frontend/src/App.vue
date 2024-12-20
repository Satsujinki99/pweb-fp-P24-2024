<template>
  <div id="app">
    <Navbar v-if="isLoggedIn" />
    <div v-if="!isLoggedIn">
      <LoginForm @login-success="handleLoginSuccess" />
    </div>
    <div v-else>
      <h1>Selamat Datang di Homepage</h1>
      <p>Ini adalah halaman utama setelah login.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import LoginForm from './components/LoginForm.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    LoginForm,
    Navbar,
  },
  setup() {
    const isLoggedIn = ref(!!localStorage.getItem('token'));

    const handleLoginSuccess = () => {
      isLoggedIn.value = true;
    };

    return { isLoggedIn, handleLoginSuccess };
  },
};
</script>

<style>
/* Tambahkan gaya sesuai kebutuhan */
</style>
