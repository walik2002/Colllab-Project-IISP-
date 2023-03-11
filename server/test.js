fetch('http://localhost:3001/classes')
    .then(response => response.json())
    .then(data => {
        data.forEach((clas, index) => {
            console.log(clas.bookings.length)
        }) // в переменной data будет содержаться ответ сервера в формате JSON
    })
    .catch(error => console.error(error)); // обработка ошибок