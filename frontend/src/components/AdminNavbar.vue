<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/admin">Data Barang</router-link></li>
        <li><router-link to="/admin/all-operator">Data Petugas</router-link></li>
        <li><router-link to="/admin/summary">Data Peminjaman</router-link></li>
        <li><router-link to="/login">Logout</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  export default {
    name: "AdminNavBar",
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #343a40;
    padding: 1rem;
    color: white;
  }
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  .navbar a {
    text-decoration: none;
    color: white;
  }
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>
  