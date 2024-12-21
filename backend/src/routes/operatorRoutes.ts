import { Router } from 'express';
import { getOperators, addOperator, updateOperator, deleteOperator } from '../controllers/operatorController';

const router = Router();

router.get('/', getOperators);
router.post('/', addOperator);
router.put('/:id', updateOperator);
router.delete('/:id', deleteOperator);

export default router;
