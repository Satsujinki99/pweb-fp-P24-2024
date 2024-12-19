<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="container">
        <h2>Manajemen Peminjaman Barang</h2>
        <span v-if="isLoggedIn" class="user-info">Halo, {{ username }}</span>
      </div>
    </nav>

    <!-- Login Form -->
    <section class="login-form">
      <div class="form-container">
        <h3>Login</h3>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="form.username" placeholder="Masukkan username" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="form.password" placeholder="Masukkan password" required />
          </div>
          <div class="form-group">
            <label for="role">Role</label>
            <select id="role" v-model="form.role" required>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Lab KCKS. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        role: "USER",
      },
      username: "",
      isLoggedIn: false,
    };
  },
  methods: {
    handleLogin() {
      const { username, password, role } = this.form;
      // Data dummy
      const dummyUser = {
        username: "admin",
        password: "1234",
        role: "ADMIN",
      };

      if (username === dummyUser.username && password === dummyUser.password && role === dummyUser.role) {
        this.isLoggedIn = true;
        this.username = username;
        localStorage.setItem("token", "dummyToken123");
        alert("Login berhasil!");
      } else {
        alert("Login gagal! Periksa kembali data Anda.");
      }
    },
  },
};
</script>

<style scoped>
/* Navbar */
.navbar {
  background-color: #2c3e50;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  font-weight: bold;
}

/* Login Form */
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: #f8f9fa;
}

.form-container {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #2980b9;
}

/* Footer */
.footer {
  text-align: center;
  padding: 1rem;
  background-color: #2c3e50;
  color: #fff;
}
</style>
