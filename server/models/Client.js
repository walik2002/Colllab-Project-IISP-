import {DataTypes} from 'sequelize';
import {sequelize} from "../config/database.js";

const Client = sequelize.define('Client', {
    client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    phone_number: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    date_of_birth: {
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
    registration_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    subscription_status: {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false
    },
    subscription_end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    available_sessions: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: 'clients'
});

export default Client;
