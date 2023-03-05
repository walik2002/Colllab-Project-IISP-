import express from "express";
import {getClientById,getAllClients,createClient,updateClient,deleteClient} from '../controllers/clientController.js'

const clientRouter = express.Router();

clientRouter.get('/', getAllClients);
clientRouter.get('/:id', getClientById);
clientRouter.post('/', createClient);
clientRouter.put('/:id', updateClient);
clientRouter.delete('/:id', deleteClient);

export default clientRouter;
