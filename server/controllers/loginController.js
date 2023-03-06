import Client from "../models/Client.js";

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
// Поиск клиента в базе данных по email и password
        const client = await Client.findOne({ where: { email, password } });
        if (!client) {
            res.status(401).send("Неправильный логин или пароль");
            return;
        }
// Установка cookie с информацией о том, что клиент аутентифицирован
        res.cookie("authenticated", "true");
        res.cookie("clientEmail", email);

        res.send("Вы успешно вошли в систему!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Ошибка сервера");
    }
};

export {login};


