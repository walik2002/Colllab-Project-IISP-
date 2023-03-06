import Admin from '../models/Admin.js';

async function getAdmins(req, res) {
    try {
        const admins = await Admin.findAll();
        res.status(200).json(admins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function createAdmin(req, res) {
    const { firstName, lastName, email, phoneNumber, password, role } = req.body;
    try {
        const admin = await Admin.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            role
        });
        res.status(201).json(admin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getAdminById(req, res) {
    const { id } = req.params;
    try {
        const admin = await Admin.findByPk(id);
        if (!admin) {
            res.status(404).json({ message: 'Admin not found' });
        } else {
            res.status(200).json(admin);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function updateAdmin(req, res) {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, password, role } = req.body;
    try {
        const admin = await Admin.findByPk(id);
        if (!admin) {
            res.status(404).json({ message: 'Admin not found' });
        } else {
            const updatedAdmin = await admin.update({
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                role
            });
            res.status(200).json(updatedAdmin);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function deleteAdmin(req, res) {
    const { id } = req.params;
    try {
        const admin = await Admin.findByPk(id);
        if (!admin) {
            res.status(404).json({ message: 'Admin not found' });
        } else {
            await admin.destroy();
            res.status(204).json({ message: 'Admin deleted' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export { getAdmins, createAdmin, getAdminById, updateAdmin, deleteAdmin };


