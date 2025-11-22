import express from 'express';
import { protect, admin } from '../middleware/auth.js';
import { getStats, listUsers, changeUserRole, deleteUser } from '../controllers/adminController.js';

const router = express.Router();

// All admin endpoints require authentication + admin
router.use(protect, admin);

router.get('/stats', getStats);
router.get('/users', listUsers);
router.put('/users/:id/role', changeUserRole);
router.delete('/users/:id', deleteUser);

export default router;
