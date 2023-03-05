import express from 'express';
import { createBooking, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();

// создание бронирования
router.post('/', createBooking);

// удаление бронирования
router.delete('/:clientId/:classId', deleteBooking);

export default router;
