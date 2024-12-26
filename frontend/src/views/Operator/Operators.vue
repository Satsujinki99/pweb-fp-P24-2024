<template>
  <div class="container">
    <AdminNavBar />
    <div class="content">
      <div class="header">
        <h1>Data Petugas</h1>
        <div class="actions">
          <button @click="sortByName" class="btn btn-secondary">Urutkan Nama</button>
          <button @click="sortByEmail" class="btn btn-secondary">Urutkan Email</button>
          <button @click="openAddForm" class="btn btn-primary">Tambah Petugas</button>
        </div>
      </div>

      <!-- Form Tambah/Edit Petugas -->
      <OperatorForm
        v-if="showForm"
        :SelectedOperator="selectedOperator"
        @close="closeForm"
        @save="saveOperator"
      />

      <!-- Tabel Data Petugas -->
      <table class="operators-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Telepon</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(operator, index) in operators" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ operator.name }}</td>
            <td>{{ operator.email }}</td>
            <td>{{ operator.phone }}</td>
            <td class="actions">
              <button @click="editOperator(operator)" class="btn btn-edit">Edit</button>
              <button @click="deleteOperator(index)" class="btn btn-delete">Hapus</button>
            </td>
          </tr>
          <tr v-if="operators.length === 0">
            <td colspan="5" class="empty">Tidak ada data petugas.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AdminNavBar from "../../components/AdminNavbar.vue";
import OperatorForm from "../../components/OperatorForm.vue";

interface Operator {
  name: string;
  email: string;
  phone: string;
}

export default defineComponent({
  name: "Operators",
  components: { AdminNavBar, OperatorForm },
  setup() {
    const operators = ref<Operator[]>([
      { name: "John Doe", email: "john@example.com", phone: "123456789" },
      { name: "Jane Smith", email: "jane@example.com", phone: "987654321" },
    ]);

    const showForm = ref(false);
    const selectedOperator = ref<Operator | null>(null);

    const openAddForm = () => {
      selectedOperator.value = null;
      showForm.value = true;
    };

    const closeForm = () => {
      showForm.value = false;
      selectedOperator.value = null;
    };

    const saveOperator = (data: Operator) => {
      if (selectedOperator.value) {
        const index = operators.value.findIndex(
          (op) => op.email === selectedOperator.value?.email
        );
        if (index !== -1) operators.value[index] = data;
      } else {
        operators.value.push(data);
      }
      closeForm();
    };

    const editOperator = (operator: Operator) => {
      selectedOperator.value = { ...operator };
      showForm.value = true;
    };

    const deleteOperator = (index: number) => {
      operators.value.splice(index, 1);
    };

    const sortByName = () => {
      operators.value.sort((a, b) => a.name.localeCompare(b.name));
    };

    const sortByEmail = () => {
      operators.value.sort((a, b) => a.email.localeCompare(b.email));
    };

    return {
      operators,
      showForm,
      selectedOperator,
      openAddForm,
      closeForm,
      saveOperator,
      editOperator,
      deleteOperator,
      sortByName,
      sortByEmail,
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

.operators-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.operators-table th,
.operators-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.operators-table th {
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
