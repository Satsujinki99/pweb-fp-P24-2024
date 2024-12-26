import { createRouter, createWebHistory } from 'vue-router';


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
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/admin', component: Items },
  { path: '/admin/operator', component: Operators },
  { path: '/admin/summary', component: BorrowSummary },
  { path: '/operator/book-equipment', name: 'BookEquipment', component: BookEquipment, meta: { requiresAuth: true }},
  { path: '/operator/all-equipment', name: 'AllEquipment', component: AllEquipment, meta: { requiresAuth: true }},
  { path: '/operator/borrowed-items', name: 'BorrowedItems', component: BorrowedItems, meta: { requiresAuth: true }},
 
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
