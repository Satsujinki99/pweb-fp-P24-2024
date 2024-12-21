<template>
    <AdminNavBar />
    <div class="container">
      <h1>Data Petugas</h1>
      <button @click="showForm = true" class="btn btn-primary">Tambah Petugas</button>
      <OperatorForm
        v-if="showForm"
        @close="showForm = false"
        @save="saveOperator"
      />
      <table>
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
            <td>
              <button @click="editOperator(operator)">Edit</button>
              <button @click="deleteOperator(index)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import AdminNavBar from "../../components/AdminNavbar.vue";
  import OperatorForm from "../../components/OperatorForm.vue";
  
  export default defineComponent({
    components: { AdminNavBar, OperatorForm },
    setup() {
      const operators = ref([
        { name: "John Doe", email: "john@example.com", phone: "123456789" },
      ]);
      const showForm = ref(false);
  
      const saveOperator = (data: any) => {
        operators.value.push(data);
      };
  
      const editOperator = (operator: any) => {
        console.log("Editing operator:", operator);
      };
  
      const deleteOperator = (index: number) => {
        operators.value.splice(index, 1);
      };
  
      return { operators, showForm, saveOperator, editOperator, deleteOperator };
    },
  });
  </script>
  