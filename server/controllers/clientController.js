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
    const { firstName: first_name, lastName: last_name, email, phoneNumber: phone_number, password, dateOfBirth: date_of_birth, gender, address, registrationDate: registration_date, subscriptionStatus: subscription_status, subscriptionEndDate: subscription_end_date, availableSessions: available_sessions } = req.body;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        const updatedClient = await client.update({
            first_name,
            last_name,
            email,
            phone_number,
            password,
            date_of_birth,
            gender,
            address,
            registration_date,
            subscription_status,
            subscription_end_date,
            available_sessions
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

