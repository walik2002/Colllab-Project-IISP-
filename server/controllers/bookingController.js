import Booking from "../models/Booking.js";


const getBookings = async (req, res) => {
    try {
// получаем все записи из бд
        const bookings = await Booking.findAll();
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};
// создание бронирования
const createBooking = async (req, res) => {
    try {
        const { clientId, classId, bookingDate } = req.body;
        // создание записи в бд
        const booking = await Booking.create({clientId, classId, bookingDate });

        res.status(201).json({booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// удаление бронирования
const deleteBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        // поиск записи в бд
        const booking = await Booking.findOne({ where: { bookingId } });

        // если не найдено, то бросаем ошибку
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // удаляем запись
        await booking.destroy();

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export {
    getBookings,
    createBooking,
    deleteBooking,
};
