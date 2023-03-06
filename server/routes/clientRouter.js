import express from "express";
import { getAllClients, getClientById, createClient, updateClient, deleteClient, getClientByEmail } from '../controllers/clientController.js'

const clientRouter = express.Router();

clientRouter.get('/', getAllClients);
clientRouter.get('/:id', getClientById);
clientRouter.post('/', createClient);
clientRouter.put('/:id', updateClient);
clientRouter.delete('/:id', deleteClient);
clientRouter.get('/email/:email',getClientByEmail);

export default clientRouter;
