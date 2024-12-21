<template>
    <div class="modal">
      <form @submit.prevent="handleSubmit">
        <h3>{{ isEdit ? "Edit Petugas" : "Tambah Petugas" }}</h3>
        <div>
          <label for="name">Nama Petugas</label>
          <input v-model="form.name" type="text" id="name" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input v-model="form.email" type="email" id="email" required />
        </div>
        <div>
          <label for="phone">Nomor Telepon</label>
          <input v-model="form.phone" type="tel" id="phone" required />
        </div>
        <button type="submit" class="btn btn-primary">{{ isEdit ? "Simpan" : "Tambah" }}</button>
        <button @click="closeForm" type="button" class="btn btn-secondary">Batal</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, PropType } from "vue";
  
  export default defineComponent({
    name: "OperatorForm",
    props: {
      operator: {
        type: Object as PropType<{ name: string; email: string; phone: string }>,
        required: false,
      },
    },
    emits: ["close", "save"],
    setup(props, { emit }) {
      const form = ref({
        name: props.operator?.name || "",
        email: props.operator?.email || "",
        phone: props.operator?.phone || "",
      });
  
      const isEdit = !!props.operator;
  
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
  