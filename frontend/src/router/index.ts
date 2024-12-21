import { createRouter, createWebHistory } from "vue-router";

// Import existing views
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Items from "../views/Admin/Items.vue";
import Operators from "../views/Admin/Operators.vue";
import BorrowSummary from "../views/Admin/BorrowSummary.vue";

// Import new views for the Operator dashboard
const BookEquipment = () => import("@/views/BookEquipment.vue");
const AllEquipment = () => import("@/views/AllEquipment.vue");
const BorrowedItems = () => import("@/views/BorrowedItems.vue");

const routes = [
  // Existing routes
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/admin", component: Items },
  { path: "/admin/all-operator", component: Operators },
  { path: "/admin/summary", component: BorrowSummary },

  // New routes for the Operator dashboard
  {
    path: "/operator/book-equipment",
    name: "BookEquipment",
    component: BookEquipment,
    meta: { requiresAuth: true }, // Access restricted to logged-in users
  },
  {
    path: "/operator/all-equipment",
    name: "AllEquipment",
    component: AllEquipment,
    meta: { requiresAuth: true }, // Access restricted to logged-in users
  },
  {
    path: "/operator/borrowed-items",
    name: "BorrowedItems",
    component: BorrowedItems,
    meta: { requiresAuth: true }, // Access restricted to logged-in users
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
