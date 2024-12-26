import { createRouter, createWebHistory } from "vue-router";

// Import existing views
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

// Import Operator views
import Items from "../views/Operator/Items.vue";
import Operators from "../views/Operator/Operators.vue";
import BorrowSummary from "../views/Operator/BorrowSummary.vue";

// Import other views
const BookEquipment = () => import("@/views/BookEquipment.vue");
const AllEquipment = () => import("@/views/AllEquipment.vue");
const BorrowedItems = () => import("@/views/BorrowedItems.vue");

const routes = [
  // Public routes
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },

  // Operator routes
  {
    path: "/operator",
    name: "Operator",
    // Optional: You can create a layout component for Operator if needed
    // component: OperatorLayout,
    children: [
      {
        path: "",
        name: "OperatorHome",
        component: Items, // At /operator, show Items component or a dashboard
      },
      {
        path: "all-operator",
        name: "Operators",
        component: Operators,
        meta: { requiresAuth: true },
      },
      {
        path: "summary",
        name: "BorrowSummary",
        component: BorrowSummary,
        meta: { requiresAuth: true },
      },
      {
        path: "book-equipment",
        name: "BookEquipment",
        component: BookEquipment,
        meta: { requiresAuth: true },
      },
      {
        path: "all-equipment",
        name: "AllEquipment",
        component: AllEquipment,
        meta: { requiresAuth: true },
      },
      {
        path: "borrowed-items",
        name: "BorrowedItems",
        component: BorrowedItems,
        meta: { requiresAuth: true },
      },
      // Tambahkan rute operator lainnya di sini
    ],
  },

  // Fallback route (optional)
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
