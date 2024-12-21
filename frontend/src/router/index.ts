import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Items from "../views/Admin/Items.vue";
import Operators from "../views/Admin/Operators.vue";
import BorrowSummary from "../views/Admin/BorrowSummary.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/admin", component: Items },
  { path: "/admin/all-operator", component: Operators },
  { path: "/admin/summary", component: BorrowSummary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
