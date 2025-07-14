// app.js
const express = require('express');
const app = express();
const PORT = 8080;

// Middleware logger (5.1)
app.use((req, res, next) => {
const now = new Date().toLocaleString();
console.log(`[${now}] ${req.method} ${req.url}`);
next();
});

// Ruta raíz (1.1)
app.get('/', (req, res) => {
res.send('¡Mi primer servidor con Express!');
});

// 1.2 - Welcome (correr por separado en welcome.js)
/// Omitido en este archivo

// 2.1 - Múltiples páginas
app.get('/nosotros', (req, res) => {
res.send('Acerca de Nosotros');
});

app.get('/contacto', (req, res) => {
res.send('Página de Contacto');
});

// 2.2 - Tienda online
app.get('/tienda', (req, res) => res.send('Bienvenido a MiTienda'));
app.get('/tienda/productos', (req, res) => res.send('Listado de todos nuestros productos'));
app.get('/tienda/categorias', (req, res) => res.send('Categorías disponibles: Electrónica, Ropa, Hogar'));
app.get('/tienda/ofertas', (req, res) => res.send('¡No te pierdas nuestras ofertas especiales!'));

// 2.3 - Ruta 404
app.use((req, res) => {
res.status(404).send('Error 404: La página que buscas no existe.');
});

// 3.1 - Saludo personalizado
app.get('/saludo/:nombre', (req, res) => {
res.send(`¡Hola, ${req.params.nombre}! Bienvenido.`);
});

// 3.2 - Detalle producto
app.get('/productos/:idProducto', (req, res) => {
res.send(`Información del producto con ID: ${req.params.idProducto}`);
});

// 3.3 - Suma
app.get('/calcular/sumar/:num1/:num2', (req, res) => {
const n1 = parseFloat(req.params.num1);
const n2 = parseFloat(req.params.num2);
const resultado = n1 + n2;
res.send(`Resultado de la suma: ${resultado}`);
});

// 3.4 - Ruta con dos parámetros
app.get('/productos/:categoria/:subcategoria', (req, res) => {
const { categoria, subcategoria } = req.params;
res.send(`Mostrando productos de la categoría ${categoria}, subcategoría ${subcategoria}`);
});

// 4.1 - Query simple
app.get('/buscar', (req, res) => {
const q = req.query.q;
if (q) {
    res.send(`Resultados de búsqueda para: ${q}`);
} else {
    res.send('Por favor, ingresa un término de búsqueda');
}
});

// 4.2 - Filtrado avanzado
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

// 5.2 - Middleware de autenticación falso
const autenticacion = (req, res, next) => {
const apiKey = req.query.apiKey;
if (apiKey === '12345') {
    next();
} else {
    res.status(401).send('Acceso denegado. Se requiere una API Key válida.');
}
};

app.get('/admin', autenticacion, (req, res) => {
res.send('Área administrativa segura.');
});

// Iniciar servidor
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
