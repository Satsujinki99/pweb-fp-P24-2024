import express from 'express';
import { 
    bookEquipment, 
    getAllEquipment, 
    getBorrowedItems 
} from '../controllers/operatorDashboardController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

// Form peminjaman barang
router.post('/book-equipment', bookEquipment);

// Data semua barang
router.get('/all-equipment', getAllEquipment);

// Data barang yang dipinjam
router.get('/borrowed-items', getBorrowedItems);

export default router;
