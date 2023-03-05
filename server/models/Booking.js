const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Booking = sequelize.define('booking', {
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
});

module.exports = Booking;
