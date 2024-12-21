<template>
    <AdminNavBar />
    <div class="container">
      <h1>Data Peminjaman</h1>
      <BorrowSummaryTable :borrows="borrows" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import AdminNavBar from "../../components/AdminNavbar.vue";
  import BorrowSummaryTable from "../../components/BorrowSummaryTable.vue";
  
  export default defineComponent({
    components: { AdminNavBar, BorrowSummaryTable },
    setup() {
      const borrows = ref([
        {
          item: "Laptop",
          amount: 1,
          borrowDate: "2024-12-01",
          returnDate: "2024-12-10",
          borrower: "Jane Smith",
          operator: "John Doe",
        },
      ]);
  
      return { borrows };
    },
  });
  </script>
  