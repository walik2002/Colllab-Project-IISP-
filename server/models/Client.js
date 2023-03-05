import {DataTypes} from 'sequelize';
import {sequelize} from "../config/database.js";

const Client = sequelize.define('Client', {
    clientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    phoneNumber: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    registrationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    subscriptionStatus: {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false
    },
    subscriptionEndDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    availableSessions: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: 'clients'
});

export default Client;
