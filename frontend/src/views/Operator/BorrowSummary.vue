<template>
  <div class="container">
    <AdminNavBar />
    <div class="content">
      <div class="header">
        <h1>Data Peminjaman</h1>
        <div class="actions">
          <button @click="sortByItemName" class="btn btn-secondary">Urutkan Nama Barang</button>
          <button @click="sortByBorrower" class="btn btn-secondary">Urutkan Peminjam</button>
          <button @click="sortByBorrowDate" class="btn btn-secondary">Urutkan Tgl Pinjam</button>
          <button @click="sortByReturnDate" class="btn btn-secondary">Urutkan Tgl Kembali</button>
          <button @click="openAddForm" class="btn btn-primary">Tambah Peminjaman</button>
        </div>
      </div>

      <!-- Form Tambah/Edit Peminjaman -->
      <BorrowForm
        v-if="showForm"
        :SelectedEntry="selectedEntry"
        @close="closeForm"
        @save="saveEntry"
      />

      <!-- Tabel Data Peminjaman -->
      <table class="borrow-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Jumlah Pinjam</th>
            <th>Tgl. Pinjam</th>
            <th>Tgl. Kembali</th>
            <th>Peminjam</th>
            <th>Petugas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in borrowData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ entry.itemName }}</td>
            <td>{{ entry.quantity }}</td>
            <td>{{ entry.borrowDate }}</td>
            <td>{{ entry.returnDate }}</td>
            <td>{{ entry.borrower }}</td>
            <td>{{ entry.officer }}</td>
            <td class="actions">
              <button @click="editEntry(entry)" class="btn btn-edit">Edit</button>
              <button @click="deleteEntry(index)" class="btn btn-delete">Hapus</button>
            </td>
          </tr>
          <tr v-if="borrowData.length === 0">
            <td colspan="8" class="empty">Tidak ada data peminjaman.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AdminNavBar from "../../components/AdminNavbar.vue";
import BorrowForm from "../../components/BorrowForm.vue";

interface BorrowEntry {
  itemName: string;
  quantity: number;
  borrowDate: string;
  returnDate: string;
  borrower: string;
  officer: string;
}

export default defineComponent({
  name: "BorrowSummary",
  components: { AdminNavBar, BorrowForm },
  setup() {
    const borrowData = ref<BorrowEntry[]>([]);
    const showForm = ref(false);
    const selectedEntry = ref<BorrowEntry | null>(null);

    const openAddForm = () => {
      selectedEntry.value = null;
      showForm.value = true;
    };

    const closeForm = () => {
      showForm.value = false;
      selectedEntry.value = null;
    };

    const saveEntry = (data: BorrowEntry) => {
      if (selectedEntry.value) {
        const index = borrowData.value.findIndex(
          (entry) => entry.itemName === selectedEntry.value?.itemName
        );
        if (index !== -1) borrowData.value[index] = data;
      } else {
        borrowData.value.push(data);
      }
      closeForm();
    };

    const editEntry = (entry: BorrowEntry) => {
      selectedEntry.value = { ...entry };
      showForm.value = true;
    };

    const deleteEntry = (index: number) => {
      borrowData.value.splice(index, 1);
    };

    const sortByItemName = () => {
      borrowData.value.sort((a, b) => a.itemName.localeCompare(b.itemName));
    };

    const sortByBorrower = () => {
      borrowData.value.sort((a, b) => a.borrower.localeCompare(b.borrower));
    };

    const sortByBorrowDate = () => {
      borrowData.value.sort((a, b) => new Date(a.borrowDate).getTime() - new Date(b.borrowDate).getTime());
    };

    const sortByReturnDate = () => {
      borrowData.value.sort((a, b) => new Date(a.returnDate).getTime() - new Date(b.returnDate).getTime());
    };

    return {
      borrowData,
      showForm,
      selectedEntry,
      openAddForm,
      closeForm,
      saveEntry,
      editEntry,
      deleteEntry,
      sortByItemName,
      sortByBorrower,
      sortByBorrowDate,
      sortByReturnDate,
    };
  },
});
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 1200px;
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
  flex-wrap: wrap;
  gap: 10px;
}

h1 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
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

.borrow-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow-x: auto;
}

.borrow-table th,
.borrow-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
}

.borrow-table th {
  background-color: #f4f4f4;
  font-weight: bold;
  color: #555;
}

.borrow-table tbody tr:hover {
  background-color: #f1f1f1;
}

.empty {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 10px 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

h3 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
