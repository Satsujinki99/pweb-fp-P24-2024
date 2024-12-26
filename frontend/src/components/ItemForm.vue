<template>
  <div class="modal">
    <div class="modal-content">
      <form @submit.prevent="handleSubmit">
        <h3>{{ isEdit ? "Edit Barang" : "Tambah Barang" }}</h3>
        <div class="form-group">
          <label for="name">Nama Barang</label>
          <input v-model="form.name" type="text" id="name" placeholder="Masukkan nama barang" required />
        </div>
        <div class="form-group">
          <label for="amount">Jumlah</label>
          <input v-model="form.amount" type="number" id="amount" placeholder="Masukkan jumlah barang" required />
        </div>
        <div class="form-group">
          <label for="condition">Kondisi</label>
          <input v-model="form.condition" type="text" id="condition" placeholder="Masukkan kondisi barang" required />
        </div>
        <div class="form-group">
          <label for="date">Tanggal Registrasi</label>
          <input v-model="form.created_at" type="date" id="date" required />
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
/* Modal styling */
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
  animation: fadeIn 0.3s ease;
}

/* Animasi fade-in */
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

/* Form styling */
h3 {
  margin: 0 0 15px;
  text-align: center;
  color: #333;
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
  color: #333;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 15px;
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
</style>
