//Ejercicios de Rutas
//Ejercicio 2.1: Múltiples Páginas
//Tarea: Crea un servidor que tenga tres rutas diferentes, cada una con un mensaje distinto:
//GET /: "Página de Inicio".
//GET /nosotros: "Acerca de Nosotros".
//GET /contacto: "Página de Contacto".

const express = require('express');
const app = express();
const PORT = 4000;

// Ruta: Página de Inicio
app.get('/', (req, res) => {
  res.send('<h1>Página de Inicio</h1>');
});

// Ruta: Acerca de Nosotros
app.get('/nosotros', (req, res) => {
  res.send('<h1>Acerca de Nosotros</h1>');
});

// Ruta: Página de Contacto
app.get('/contacto', (req, res) => {
  res.send('<h1>Página de Contacto</h1>');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
