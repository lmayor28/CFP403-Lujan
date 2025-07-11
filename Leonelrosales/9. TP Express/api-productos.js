// api-productos.js
const express = require('express');
const app = express();
app.use(express.json());
const productos = [
{ id: 1, nombre: 'Laptop' },
{ id: 2, nombre: 'Celular' },
];

// 6.1 - Lista completa
app.get('/api/productos', (req, res) => {
res.json(productos);
});

// 6.2 - Buscar producto por ID
app.get('/api/productos/:id', (req, res) => {
const id = parseInt(req.params.id);
const producto = productos.find(p => p.id === id);
if (producto) {
    res.json(producto);
} else {
    res.status(404).json({ error: 'Producto no encontrado' });
}
});

// 6.3 - Crear producto
let siguienteId = 3;
app.post('/api/productos', (req, res) => {
const nuevoProducto = {
    id: siguienteId++,
    nombre: req.body.nombre
};
productos.push(nuevoProducto);
res.status(201).json(nuevoProducto);
});
app.listen(3001, () => {
console.log('API de productos corriendo en http://localhost:3001');
});
