<template>
  <div class="container">
    <AdminNavBar />
    <div class="content">
      <div class="header">
        <h1>Data Barang</h1>
        <div class="actions">
          <button @click="sortByName" class="btn btn-secondary">Urutkan Nama</button>
          <button @click="sortByDate" class="btn btn-secondary">Urutkan Tanggal</button>
          <button @click="openForm()" class="btn btn-primary">Tambah Barang</button>
        </div>
      </div>
      
      <!-- Formulir Tambah/Edit Barang -->
      <ItemForm 
        v-if="showForm" 
        :selectedItem="selectedItem"
        @close="closeForm" 
        @save="saveItem" 
      />

      <!-- Tabel Data Barang -->
      <table class="items-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Barang</th>
            <th>Jumlah</th>
            <th>Kondisi</th>
            <th>Tanggal Registrasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.condition }}</td>
            <td>{{ item.created_at }}</td>
            <td class="actions">
              <button @click="editItem(item)" class="btn btn-edit">Edit</button>
              <button @click="deleteItem(item.id)" class="btn btn-delete">Hapus</button>
            </td>
          </tr>
          <tr v-if="items.length === 0">
            <td colspan="6" class="empty">Tidak ada data barang.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AdminNavBar from "../../components/AdminNavbar.vue";
import ItemForm from "../../components/ItemForm.vue";

interface Item {
  id: number;
  name: string;
  amount: number;
  condition: string;
  created_at: string;
}

export default defineComponent({
  name: "Items",
  components: { AdminNavBar, ItemForm },
  setup() {
    const showForm = ref(false);
    const selectedItem = ref<Item | null>(null);
    const items = ref<Item[]>([
      // Contoh data
      { id: 1, name: "Meja", amount: 2, condition: "Baik", created_at: "2023-12-20" },
      { id: 2, name: "Kursi", amount: 4, condition: "Baik", created_at: "2023-12-18" },
    ]);

    // Fungsi untuk membuka form
    const openForm = (item?: Item) => {
      selectedItem.value = item || null;
      showForm.value = true;
    };

    // Fungsi untuk menutup form
    const closeForm = () => {
      showForm.value = false;
      selectedItem.value = null;
    };

    // Fungsi untuk menyimpan barang baru atau hasil edit
    const saveItem = (data: Omit<Item, "id">) => {
      if (selectedItem.value) {
        const index = items.value.findIndex(item => item.id === selectedItem.value?.id);
        if (index !== -1) items.value[index] = { ...selectedItem.value, ...data };
      } else {
        const newItem: Item = {
          id: items.value.length + 1,
          ...data,
        };
        items.value.push(newItem);
      }
      closeForm();
    };

    // Fungsi untuk mengedit barang
    const editItem = (item: Item) => {
      openForm(item);
    };

    // Fungsi untuk menghapus barang
    const deleteItem = (id: number) => {
      items.value = items.value.filter(item => item.id !== id);
    };

    // Fungsi untuk mengurutkan berdasarkan nama
    const sortByName = () => {
      items.value.sort((a, b) => a.name.localeCompare(b.name));
    };

    // Fungsi untuk mengurutkan berdasarkan tanggal
    const sortByDate = () => {
      items.value.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    };

    return {
      showForm,
      selectedItem,
      items,
      openForm,
      closeForm,
      saveItem,
      deleteItem,
      editItem,
      sortByName,
      sortByDate,
    };
  },
});
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 800px;
}

.content {
  margin-top: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  gap: 10px;
}

h1 {
  margin: 0;
}

.btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.items-table th,
.items-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.items-table th {
  background-color: #f4f4f4;
}

.btn-edit {
  background-color: #ffc107;
  color: white;
}

.btn-edit:hover {
  background-color: #e0a800;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
}

.btn-delete:hover {
  background-color: #c82333;
}

.empty {
  text-align: center;
  color: #999;
}
</style>
