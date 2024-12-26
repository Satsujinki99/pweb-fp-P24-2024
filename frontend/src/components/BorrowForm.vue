<template>
    <div class="modal">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit">
          <h3>{{ isEdit ? "Edit Peminjaman" : "Tambah Peminjaman" }}</h3>
          <div class="form-group">
            <label for="itemName">Nama Barang</label>
            <input v-model="form.itemName" type="text" id="itemName" placeholder="Masukkan nama barang" required />
          </div>
          <div class="form-group">
            <label for="quantity">Jumlah Pinjam</label>
            <input v-model="form.quantity" type="number" id="quantity" placeholder="Masukkan jumlah pinjam" required />
          </div>
          <div class="form-group">
            <label for="borrowDate">Tanggal Pinjam</label>
            <input v-model="form.borrowDate" type="date" id="borrowDate" required />
          </div>
          <div class="form-group">
            <label for="returnDate">Tanggal Kembali</label>
            <input v-model="form.returnDate" type="date" id="returnDate" required />
          </div>
          <div class="form-group">
            <label for="borrower">Nama Peminjam</label>
            <input v-model="form.borrower" type="text" id="borrower" placeholder="Masukkan nama peminjam" required />
          </div>
          <div class="form-group">
            <label for="officer">Nama Petugas</label>
            <input v-model="form.officer" type="text" id="officer" placeholder="Masukkan nama petugas" required />
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">{{ isEdit ? "Simpan" : "Tambah" }}</button>
            <button @click="closeForm" type="button" class="btn btn-secondary">Batal</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, PropType } from "vue";
  
  export default defineComponent({
    name: "BorrowForm",
    props: {
      entry: {
        type: Object as PropType<{
          itemName: string;
          quantity: number;
          borrowDate: string;
          returnDate: string;
          borrower: string;
          officer: string;
        }>,
        required: false,
      },
    },
    emits: ["close", "save"],
    setup(props, { emit }) {
      const form = ref({
        itemName: props.entry?.itemName || "",
        quantity: props.entry?.quantity || 1,
        borrowDate: props.entry?.borrowDate || "",
        returnDate: props.entry?.returnDate || "",
        borrower: props.entry?.borrower || "",
        officer: props.entry?.officer || "",
      });
  
      const isEdit = !!props.entry;
  
      const handleSubmit = () => {
        emit("save", form.value);
        emit("close");
      };
  
      const closeForm = () => emit("close");
  
      return { form, isEdit, handleSubmit, closeForm };
    },
  });
  </script>
  
  <style scoped>
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
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .btn {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
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
  </style>
  