//Ejercicio 1.2: Mensaje de Bienvenida
//Tarea: Crea un nuevo servidor desde cero en un archivo welcome.js. Debe correr en el puerto 4000 y
// responder en la ruta principal con un <h1> que diga "Bienvenido a mi sitio web".
//Pista: res.send() puede enviar texto HTML.



const express = require('express');
const app = express();
const PORT = 4000;

// Ruta principal "/"
app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a mi sitio web</h1>');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

