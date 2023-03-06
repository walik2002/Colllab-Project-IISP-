import express from 'express';
import cors from 'cors';
import {sequelize} from './config/database.js';
import clientRouter from "./routes/clientRouter.js";
import trainerRouter from "./routes/trainerRouter.js";
import classRouter from "./routes/classRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
import adminRouter from "./routes/adminRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/clients', clientRouter);
app.use('/trainers',trainerRouter);
app.use('/classes',classRouter);
app.use('/bookings',bookingRouter);
app.use('/admins',adminRouter);
app.use('login',loginRouter);

app.listen(3001, function() {
    console.log('Приложение запущено на порту 3001');
});