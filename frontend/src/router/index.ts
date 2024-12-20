import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import LoginView from "../views/Login.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/login", name: "Login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
