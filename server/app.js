const express = require('express');
const app = express();

app.get('/', function(req, res) {
    const message = {
        greeting: 'Привет, мир!'
    };
    res.json(message);
});

app.listen(3000, function() {
    console.log('Приложение запущено на порту 3000');
});