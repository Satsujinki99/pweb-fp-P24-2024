<template>
  <div>
    <Navbar />
    <h1>Selamat Datang di Homepage</h1>
    <p>Ini adalah halaman utama setelah login.</p>
  </div>
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
