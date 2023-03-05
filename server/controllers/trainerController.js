import Trainer from '../models/Trainer.js';

// get all trainers
const getAllTrainers = async (req, res, next) => {
    try {
        const trainers = await Trainer.findAll();
        res.status(200).json(trainers);
    } catch (error) {
        next(error);
    }
};

// get trainer by id
const getTrainerById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const trainer = await Trainer.findByPk(id);
        if (!trainer) {
            res.status(404).json({ message: `Trainer with id ${id} not found` });
        }
        res.status(200).json(trainer);
    } catch (error) {
        next(error);
    }
};

// create new trainer
const createTrainer = async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, password, dateOfBirth, gender, specialization, experience } = req.body;
    try {
        const trainer = await Trainer.create({ firstName, lastName, email, phoneNumber, password, dateOfBirth, gender, specialization, experience });
        res.status(201).json(trainer);
    } catch (error) {
        next(error);
    }
};

// update trainer by id
const updateTrainer = async (req, res, next) => {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, password, dateOfBirth, gender, specialization, experience } = req.body;
    try {
        const trainer = await Trainer.findByPk(id);
        if (!trainer) {
            res.status(404).json({ message: `Trainer with id ${id} not found` });
        }
        const updatedTrainer = await trainer.update({ firstName, lastName, email, phoneNumber, password, dateOfBirth, gender, specialization, experience });
        res.status(200).json(updatedTrainer);
    } catch (error) {
        next(error);
    }
};

// delete trainer by id
const deleteTrainer = async (req, res, next) => {
    const { id } = req.params;
    try {
        const trainer = await Trainer.findByPk(id);
        if (!trainer) {
            res.status(404).json({ message: `Trainer with id ${id} not found` });
        }
        await trainer.destroy();
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};

export { getAllTrainers, getTrainerById, createTrainer, updateTrainer, deleteTrainer };
