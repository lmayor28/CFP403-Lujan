//Ejercicio 1.1: Mi Primer Servidor
//Tarea: Crea un archivo app.js. Escribe el código para iniciar un servidor en el puerto 8080 que,
// al ser visitado en su ruta principal (/), responda con el texto "¡Mi primer servidor con Express!".

// server.js
const express = require('express');
const app = express();
const PUERTO = 8080;

// Cuando alguien visita la ruta principal ('/'), le respondemos.
app.get('/', (req, res) => {
  res.send('¡Mi primer servidor con Express!');
});

// Iniciamos el servidor
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});



