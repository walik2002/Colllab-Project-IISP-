import express from 'express';
import cors from 'cors';
import {sequelize} from './config/database.js';
import clientRouter from "./routes/clientRouter.js";
import trainerRouter from "./routes/trainerRouter.js";
import classRouter from "./routes/classRouter.js";
import bookingRouter from "./routes/bookingRouter.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use('/clients', clientRouter);
app.use('/trainers',trainerRouter);
app.use('/classes',classRouter);
app.use('/bookings',bookingRouter);

app.listen(3001, function() {
    console.log('Приложение запущено на порту 3001');
});