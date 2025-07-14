//Ejemplo 1: "Hola Mundo"
// server.js
const express = require('express');
const app = express();
const PUERTO = 3000;

// Cuando alguien visita la ruta principal ('/'), le respondemos.
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciamos el servidor
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});


