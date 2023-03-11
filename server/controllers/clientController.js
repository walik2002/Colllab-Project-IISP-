import Client from '../models/Client.js';

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createClient = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, dateOfBirth, gender, address, registrationDate, subscriptionStatus, subscriptionEndDate, availableSessions } = req.body;

    try {
        // Проверяем, что все необходимые поля заполнены
        if (!firstName || !lastName || !email || !phoneNumber || !password || !dateOfBirth || !gender || !address || !registrationDate || !subscriptionStatus) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        // Проверяем, что такой клиент еще не зарегистрирован
        const existingClient = await Client.findOne({ where: { email } });
        if (existingClient) {
            return res.status(400).json({ message: 'A client with this email address is already registered' });
        }

        // Создаем нового клиента
        const newClient = await Client.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            dateOfBirth,
            gender,
            address,
            registrationDate,
            subscriptionStatus,
            subscriptionEndDate,
            availableSessions
        });

        res.status(201).json(newClient);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};


const updateClient = async (req, res) => {
    const { id } = req.params;
    const { firstName: firstName, lastName: lastName, email, phoneNumber: phoneNumber, password, dateOfBirth: dateOfBirth, gender, address, registrationDate: registrationDate, subscriptionStatus: subscriptionStatus, subscriptionEndDate: subscriptionEndDate, availableSessions: availableSessions } = req.body;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        const updatedClient = await client.update({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            dateOfBirth,
            gender,
            address,
            registrationDate,
            subscriptionStatus,
            subscriptionEndDate,
            availableSessions
        });
        res.status(200).json(updatedClient);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};


const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        await client.destroy();
        res.status(204).json({ message: 'Client deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getClientByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const client = await Client.findOne({ where: { email } });
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export { getAllClients, getClientById, createClient, updateClient, deleteClient, getClientByEmail };

