<template>
    <AdminNavBar />
    <div class="container">
      <h1>Data Barang</h1>
      <button @click="showForm = true" class="btn btn-primary">Tambah Barang</button>
      <ItemForm v-if="showForm" @close="showForm = false" @save="saveItem" />
      <table>
        <!-- Table for items -->
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import AdminNavBar from "../../components/AdminNavbar.vue";
  import ItemForm from "../../components/ItemForm.vue";
  
  export default defineComponent({
    components: { AdminNavBar, ItemForm },
    setup() {
      const showForm = ref(false);
  
      const saveItem = (data: any) => {
        console.log("Saved item:", data);
      };
  
      return { showForm, saveItem };
    },
  });
  </script>
  