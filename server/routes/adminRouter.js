import express from 'express';
import { getAdmins, createAdmin, getAdminById, updateAdmin, deleteAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.get('/', getAdmins);
router.post('/', createAdmin);
router.get('/:id', getAdminById);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);

export default router;
