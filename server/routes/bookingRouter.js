import express from 'express';
import {getBookings, createBooking, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.get("/",getBookings);
// создание бронирования
router.post('/', createBooking);

// удаление бронирования
router.delete('/:bookingId', deleteBooking);

export default router;
