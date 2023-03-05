import {DataTypes} from 'sequelize';
import {sequelize} from "../config/database.js";
import Class from "./Class.js";

const Trainer = sequelize.define('Trainer',
    {
        trainerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'trainer_id'
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'last_name'
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'phone_number'
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'date_of_birth'
        },
        gender: {
            type: DataTypes.ENUM('male', 'female', 'other'),
            allowNull: false
        },
        specialization: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        experience: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName: 'trainers',
        underscored: true
    }
);
Class.hasMany(Trainer, { foreignKey: 'trainerId' });
export default Trainer;
