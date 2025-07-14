//PRAMETROS DE RUTA
const express = require('express');
const app = express();
const PORT = 3000;

// Ejercicio 3.1: Saludo personalizado
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}! Bienvenido.`);
});

// Ejercicio 3.2: Detalles de un producto por ID
app.get('/productos/:idProducto', (req, res) => {
  const idProducto = req.params.idProducto;
  res.send(`Información del producto con ID: ${idProducto}`);
});

// Ejercicio 3.3: Sumar dos números desde la URL
app.get('/calcular/sumar/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  
  if (isNaN(num1) || isNaN(num2)) {
    return res.send('Por favor, ingresa números válidos.');
  }

  const resultado = num1 + num2;
  res.send(`El resultado de sumar ${num1} + ${num2} es: ${resultado}`);
});

// Ejercicio 3.4: Búsqueda por categoría y subcategoría
app.get('/productos/:categoria/:subcategoria', (req, res) => {
  const { categoria, subcategoria } = req.params;
  res.send(`Mostrando productos de la categoría ${categoria}, subcategoría ${subcategoria}`);
});

// Ejercicio 4.1
app.get('/buscar', (req, res) => {
  const q = req.query.q;
  if (q) {
    res.send(`Resultados de búsqueda para: ${q}`);
  } else {
    res.send('Por favor, ingresa un término de búsqueda');
  }
});

//Ejercicio 4,1

app.get('/productos', (req, res) => {
  const { categoria, precio_max } = req.query;

  if (categoria && precio_max) {
    res.send(`Filtrando por categoría ${categoria} y precio máximo ${precio_max}`);
  } else if (categoria) {
    res.send(`Filtrando por categoría: ${categoria}`);
  } else if (precio_max) {
    res.send(`Filtrando por precio máximo: ${precio_max}`);
  } else {
    res.send('Mostrando todos los productos');
  }
});

//ejercicio 5.1

const fechaHoraLogger = (req, res, next) => {
  console.log(`Fecha y hora de la petición: ${new Date().toLocaleString()}`);
  next();
};

app.use(fechaHoraLogger);

//ejercicio 5.2

const autenticar = (req, res, next) => {
  const apiKey = req.query.apiKey;
  if (apiKey === '12345') {
    next();
  } else {
    res.status(401).send('Acceso denegado. Se requiere una API Key válida.');
  }
};

app.get('/admin', autenticar, (req, res) => {
  res.send('Bienvenido al área administrativa.');
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

