import Client from "../models/Client.js";
import Admin from "../models/Admin.js";

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Поиск клиента в базе данных по email и password
        const client = await Client.findOne({ where: { email, password } });
        if (client) {
            // Установка cookie с информацией о том, что клиент аутентифицирован
            res.cookie("authenticated", "true");
            res.cookie("clientEmail", email);

            // Возвращение JSON для клиента
            res.json({ role: "client", email, password });
            return;
        }

        // Поиск админа в базе данных по email и password
        const admin = await Admin.findOne({ where: { email, password } });
        if (admin) {
            // Установка cookie с информацией о том, что админ аутентифицирован
            res.cookie("authenticated", "true");
            res.cookie("adminEmail", email);

            // Возвращение JSON для админа
            res.json({ role: "admin", email, password });
            return;
        }

        // Если пользователь не найден, возвращаем ошибку авторизации
        res.status(401).send("Неправильный логин или пароль");
    } catch (err) {
        console.error(err);
        res.status(500).send("Ошибка сервера");
    }
};

export {login};


