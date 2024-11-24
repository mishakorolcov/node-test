const express = require('express');
const app = express();

// Створюємо маршрут для головної сторінки
app.get('/', (req, res) => {
    res.status(200).json({message: "1111"});
});

// Запускаємо сервер на порту 3000
app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001');
});
