import Sequelize from 'sequelize'
import mysql from 'mysql2';

const sequelize = new Sequelize('fitness_center', 'valentin_belous', 'Q1w2e3r4', {
    host: 'db4free.net',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectModule: mysql,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export {sequelize};