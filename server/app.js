import express from 'express';
import cors from 'cors';
import {sequelize} from './config/database.js';
import clientRouter from "./routes/clientRouter.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use('/clients', clientRouter);

app.listen(3001, function() {
    console.log('Приложение запущено на порту 3001');
});