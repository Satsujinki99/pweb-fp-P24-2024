<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">Form Peminjaman Barang</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label>Nama Barang</label>
          <input v-model="form.name" class="input" placeholder="Masukkan Nama Barang" />
        </div>
        <div class="mb-4">
          <label>Jumlah Pinjam</label>
          <input type="number" v-model="form.quantity" class="input" placeholder="Jumlah Pinjam" />
        </div>
        <div class="mb-4">
          <label>Tanggal Pengembalian</label>
          <input type="date" v-model="form.returnDate" class="input" />
        </div>
        <div class="mb-4">
          <label>Nama Peminjam</label>
          <input v-model="form.borrower" class="input" placeholder="Nama Peminjam" />
        </div>
        <div class="mb-4">
          <label>Nama Petugas</label>
          <input v-model="form.officer" class="input" placeholder="Nama Petugas" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  const form = ref({
    name: '',
    quantity: 0,
    returnDate: '',
    borrower: '',
    officer: ''
  });
  
  const handleSubmit = async () => {
    try {
      await axios.post('/api/operator/book-equipment', form.value);
      alert('Peminjaman berhasil ditambahkan');
    } catch (error) {
      console.error(error);
      alert('Gagal menyimpan data');
    }
  };
  </script>
  