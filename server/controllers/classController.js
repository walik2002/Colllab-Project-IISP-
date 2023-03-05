import Class from "../models/Class.js";
import Trainer from "../models/Trainer.js";

// Получить список всех занятий
async function getClasses(req, res) {
    try {
        const classes = await Class.findAll({ include: Trainer });
        res.status(200).json(classes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Создать новое занятие
async function createClass(req, res) {
    const { dateTime, name, description, maxParticipants, trainerId } = req.body;
    try {
        const newClass = await Class.create({
            dateTime,
            name,
            description,
            maxParticipants,
            trainerId,
        });
        res.status(201).json(newClass);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Получить информацию о занятии по id
async function getClassById(req, res) {
    const { id } = req.params;
    try {
        const classItem = await Class.findByPk(id, { include: Trainer });
        if (classItem) {
            res.status(200).json(classItem);
        } else {
            res.status(404).json({ message: `Class with id ${id} not found` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


// Обновить информацию о занятии
async function updateClass(req, res) {
    const id = req.params.id;
    const { dateTime, name, description, maxParticipants, trainerId } = req.body;
    try {
        const classItem = await Class.findByPk(id);
        if (classItem) {
            await classItem.update({
                dateTime,
                name,
                description,
                maxParticipants,
                trainerId,
            });
            res.status(200).json({ message: `Class with id ${id} updated` });
        } else {
            res.status(404).json({ message: `Class with id ${id} not found` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Удалить занятие по id
async function deleteClass(req, res) {
    const id = req.params.id;
    try {
        const deletedClass = await Class.destroy({ where: { classId: id } });
        if (deletedClass) {
            res.status(200).json({ message: `Class with id ${id} deleted` });
        } else {
            res.status(404).json({ message: `Class with id ${id} not found` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export { getClasses, createClass, getClassById, updateClass, deleteClass };
