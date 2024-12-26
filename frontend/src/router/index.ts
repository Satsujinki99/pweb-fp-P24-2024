import { createRouter, createWebHistory } from 'vue-router';

<<<<<<< HEAD
// Import views
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Items from '../views/Admin/Barang.vue';
import Operators from '../views/Admin/Petugas.vue';
import BorrowSummary from '../views/Admin/BorrowSummary.vue';

// Import operator views
const BookEquipment = () => import('@/views/BookEquipment.vue');
const AllEquipment = () => import('@/views/AllEquipment.vue');
const BorrowedItems = () => import('@/views/BorrowedItems.vue');

const routes = [
  { path: '/', component: Login }, // Login page
  { path: '/home', component: Home }, // Home page
  { path: '/admin', component: Items },
  { path: '/admin/Operator', component: Operators },
  { path: '/admin/summary', component: BorrowSummary },
  {
    path: '/operator/book-equipment',
    name: 'BookEquipment',
    component: BookEquipment,
    meta: { requiresAuth: true },
  },
  {
    path: '/operator/all-equipment',
    name: 'AllEquipment',
    component: AllEquipment,
    meta: { requiresAuth: true },
  },
  {
    path: '/operator/borrowed-items',
    name: 'BorrowedItems',
    component: BorrowedItems,
    meta: { requiresAuth: true },
=======
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
>>>>>>> 0e8b9778df28be1e8b3485d73f5f81f9cfc2ab62
  },

  // Fallback route (optional)
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protect routes that require authentication
router.beforeEach((to, _, next) => {
  const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/'); // Redirect to login if not authenticated
  } else {
    next(); // Continue to the requested route
  }
});

export default router;
