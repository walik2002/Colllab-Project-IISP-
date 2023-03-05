import {DataTypes} from 'sequelize';
import {sequelize} from "../config/database.js";
import Trainer from "./Trainer.js";

const Class = sequelize.define('class', {
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'class_id',
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'date_time',
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    maxParticipants: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'max_participants',
    },
    trainerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'trainer_id',
        references: {
            model: 'trainers',
            key: 'trainer_id',
        },
    },
}, {
    timestamps:false,
    tableName: 'classes',
    underscored: true
});

export default Class;