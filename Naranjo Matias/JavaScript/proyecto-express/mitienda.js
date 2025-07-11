//Ejercicio 2.2: Mi Tienda Online
//Tarea: Crea un nuevo servidor que simule una tienda online con las siguientes rutas:
//GET /: "Bienvenido a MiTienda".
//GET /productos: "Listado de todos nuestros productos".
//GET /categorias: "Categorías disponibles: Electrónica, Ropa, Hogar".
//GET /ofertas: "¡No te pierdas nuestras ofertas especiales!".

const express = require('express');
const app = express();
const PORT = 4000;

// Ruta: Inicio
app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a MiTienda</h1>');
});

// Ruta: Productos
app.get('/productos', (req, res) => {
  res.send('<h1>Listado de todos nuestros productos</h1>');
});

// Ruta: Categorías
app.get('/categorias', (req, res) => {
  res.send('<h1>Categorías disponibles: Electrónica, Ropa, Hogar</h1>');
});

// Ruta: Ofertas
app.get('/ofertas', (req, res) => {
  res.send('<h1>¡No te pierdas nuestras ofertas especiales!</h1>');
});


app.use((req, res) => {
  res.status(404).send('Error 404: La página que buscas no existe.');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor de MiTienda corriendo en http://localhost:${PORT}`);
});

