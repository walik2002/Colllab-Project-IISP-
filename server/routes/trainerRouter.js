import express from 'express';
import {getAllTrainers, getTrainerById, createTrainer, updateTrainer, deleteTrainer} from '../controllers/trainerController.js';

const trainerRouter = express.Router();

trainerRouter.get('/', getAllTrainers);
trainerRouter.get('/:id', getTrainerById);
trainerRouter.post('/', createTrainer);
trainerRouter.put('/:id', updateTrainer);
trainerRouter.delete('/:id', deleteTrainer);

export default trainerRouter;
