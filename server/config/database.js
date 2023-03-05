import Sequelize from 'sequelize'
import mysql from 'mysql2';

const sequelize = new Sequelize('sql7603087', 'sql7603087', '3UunUyynSH', {
    host: 'sql7.freemysqlhosting.net',
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