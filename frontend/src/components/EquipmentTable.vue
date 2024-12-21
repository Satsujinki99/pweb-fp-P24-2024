<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">Data Barang</h2>
      <b-table :items="items" :fields="fields" sortable>
        <template #cell(actions)="row">
          <button class="btn btn-info" @click="viewDetails(row.item)">Detail</button>
        </template>
      </b-table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const items = ref([]);
  const fields = ref([
    { key: 'id', label: 'No', sortable: true },
    { key: 'name', label: 'Nama Barang', sortable: true },
    { key: 'condition', label: 'Kondisi', sortable: true },
    { key: 'quantity', label: 'Jumlah', sortable: true },
    { key: 'registeredAt', label: 'Tanggal Registrasi', sortable: true },
    { key: 'actions', label: 'Aksi' }
  ]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/operator/all-equipment');
      items.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(fetchData);
  </script>
  