import Booking from "../models/Class.js";

// создание бронирования
const createBooking = async (req, res) => {
    try {
        const { clientId, classId, bookingDate } = req.body;

        // создание записи в бд
        const booking = await Booking.create({ clientId, classId, bookingDate });

        res.status(201).json({ success: true, booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// удаление бронирования
const deleteBooking = async (req, res) => {
    try {
        const { clientId, classId } = req.params;

        // поиск записи в бд
        const booking = await Booking.findOne({ where: { clientId, classId } });

        // если не найдено, то бросаем ошибку
        if (!booking) {
            return res.status(404).json({ success: false, message: 'Booking not found' });
        }

        // удаляем запись
        await booking.destroy();

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export {
    createBooking,
    deleteBooking,
};
