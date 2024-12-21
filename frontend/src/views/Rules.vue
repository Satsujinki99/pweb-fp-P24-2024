<template>
    <div class="p-8"> <!-- Tambahkan padding di seluruh halaman -->
      <h1 class="text-3xl font-bold mb-4">Aturan Peminjaman</h1>
      <p class="text-lg">Berikut adalah aturan peminjaman yang harus diikuti:</p>
      <ul class="list-disc list-inside mt-4">
        <li>Mahasiswa tidak bisa langsung meminjam barang.</li>
        <li>Jika ingin meminjam barang harus melalui operator/ petugas laboratorium terlebih dahulu.
            </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Rules',
  };
  </script>
  
  <style scoped>
  /* Tidak ada styling tambahan di sini, semua menggunakan Tailwind CSS */
  </style>
  