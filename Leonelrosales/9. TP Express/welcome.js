// Ejercicio 1.2: Mensaje de Bienvenida
const express = require('express');
const app = express();
const PUERTO = 4000;

app.get('/', (req, res) => {
res.send('<h1>Bienvenido a mi sitio web</h1>');
});

app.listen(PUERTO, () => {
console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});
