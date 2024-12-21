import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Rules from '../views/Rules.vue';

const routes = [
  { path: '/', component: Login }, // Halaman login
  { path: '/home', component: Home }, // Halaman home
  { path: '/rules', component: Rules }, // Halaman aturan
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
