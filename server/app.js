const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function(req, res) {
    const message = {
        greeting: 'Привет, мир!'
    };
    res.json(message);
});

app.listen(3001, function() {
    console.log('Приложение запущено на порту 3001');
});