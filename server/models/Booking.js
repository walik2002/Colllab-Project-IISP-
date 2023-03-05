import {DataTypes} from 'sequelize';
import {sequelize} from "../config/database.js";

const Booking = sequelize.define('booking', {
    bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'booking_id'
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'client_id',
        references: {
            model: 'clients',
            key: 'clientId',
        },
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'class_id',
        references: {
            model: 'classes',
            key: 'classId',
        },
    },
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'booking_date',
    },
}, {
    timestamps: false,
    tableName: 'bookings',
    underscored: true
});

export default Booking;
