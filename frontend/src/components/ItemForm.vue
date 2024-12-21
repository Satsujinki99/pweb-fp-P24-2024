<template>
    <div class="modal">
      <form @submit.prevent="handleSubmit">
        <h3>{{ isEdit ? "Edit Barang" : "Tambah Barang" }}</h3>
        <div>
          <label for="name">Nama Barang</label>
          <input v-model="form.name" type="text" id="name" required />
        </div>
        <div>
          <label for="amount">Jumlah</label>
          <input v-model="form.amount" type="number" id="amount" required />
        </div>
        <div>
          <label for="condition">Kondisi</label>
          <input v-model="form.condition" type="text" id="condition" required />
        </div>
        <div>
          <label for="date">Tanggal Registrasi</label>
          <input v-model="form.created_at" type="date" id="date" required />
        </div>
        <button type="submit" class="btn btn-primary">{{ isEdit ? "Simpan" : "Tambah" }}</button>
        <button @click="closeForm" type="button" class="btn btn-secondary">Batal</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, PropType } from "vue";
  
  export default defineComponent({
    name: "ItemForm",
    props: {
      item: {
        type: Object as PropType<{
          name: string;
          amount: number;
          condition: string;
          created_at: string;
        }>,
        required: false,
      },
    },
    emits: ["close", "save"],
    setup(props, { emit }) {
      const form = ref({
        name: props.item?.name || "",
        amount: props.item?.amount || 0,
        condition: props.item?.condition || "",
        created_at: props.item?.created_at || "",
      });
  
      const isEdit = !!props.item;
  
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
    background: rgba(0, 0, 0, 0.8);
    padding: 2rem;
    border-radius: 5px;
    max-width: 400px;
    margin: auto;
  }
  </style>
  