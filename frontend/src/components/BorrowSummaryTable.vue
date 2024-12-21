<template>
    <div class="borrow-summary">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Jumlah Pinjam</th>
            <th>Tgl. Pinjam</th>
            <th>Tgl. Kembali</th>
            <th>Peminjam</th>
            <th>Petugas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(borrow, index) in borrows" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ borrow.item }}</td>
            <td>{{ borrow.amount }}</td>
            <td>{{ borrow.borrowDate }}</td>
            <td>{{ borrow.returnDate }}</td>
            <td>{{ borrow.borrower }}</td>
            <td>{{ borrow.operator }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="generatePDF" class="btn btn-primary">Cetak PDF</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "BorrowSummaryTable",
    props: {
      borrows: {
        type: Array as () => Array<{
          item: string;
          amount: number;
          borrowDate: string;
          returnDate: string;
          borrower: string;
          operator: string;
        }>,
        required: true,
      },
    },
    methods: {
      generatePDF() {
        console.log("Generating PDF...");
      },
    },
  });
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  th, td {
    padding: 8px 12px;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  