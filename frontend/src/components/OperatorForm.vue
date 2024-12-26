<template>
  <div class="modal">
    <div class="modal-content">
      <form @submit.prevent="handleSubmit">
        <h3>{{ isEdit ? "Edit Petugas" : "Tambah Petugas" }}</h3>
        <div class="form-group">
          <label for="name">Nama Petugas</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Masukkan nama petugas"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Masukkan email petugas"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">Nomor Telepon</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            placeholder="Masukkan nomor telepon"
            required
          />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">
            {{ isEdit ? "Simpan" : "Tambah" }}
          </button>
          <button @click="closeForm" type="button" class="btn btn-secondary">
            Batal
          </button>
        </div>
      </form>
    </div>
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
