import { Router } from 'express';
import { getBorrows, addBorrow } from '../controllers/borrowController';

const router = Router();

router.get('/', getBorrows);
router.post('/', addBorrow);

export default router;
