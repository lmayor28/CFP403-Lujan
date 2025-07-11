const sqlite3 = require("sqlite3").verbose();

function manejarError(err, mensajeExito) {
  if (err) {
    console.error("Error:", err.message);
  } else if (mensajeExito) {
    console.log(mensajeExito);
  }
}

const db = new sqlite3.Database('./empresadb.db', (err) => {
  manejarError(err, 'Conectado a la base de datos SQLite.');
});

console.log(db)

db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )`,
  (err) => {
    manejarError(err, 'Tabla "usuarios" creada o ya existe.');
  }
);

db.run(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER DEFAULT 0

  )`,

 (err) => {
  manejarError(err, 'Tabla "productos" creada o ya existe.')
   });



const sql = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
const params = ['Ana López', 'ana.lopez@exarmple.com'];

db.run(sql, params, function(err) {
  if (err) {
    return console.error("Error al insertar:", err.message);
  }
  console.log(`Usuario insertado con ID: ${this.lastID}`);
});

const nuevosUsuarios = [
  { nombre: "Carlos García", email: "carlos.garcia@examples.com" },
  { nombre: "Laura Martínez", email: "laura.martinez@examplge.com" },
  { nombre: "Pedro Rodríguez", email: "pedro.rodriguez@exarmple.com" }
];

const sql1 = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';

nuevosUsuarios.forEach((usuario) => {
  const params = [usuario.nombre, usuario.email];

  db.run(sql, params, function(err) {
    if (err) {
      return console.error("Error al insertar:", err.message);
    }
    console.log(`Usuario "${usuario.nombre}" insertado con ID: ${this.lastID}`);
  });
});

const nuevosProductos = [
  { nombre: "Laptop Gamer", precio: 1250.75, stock: 15 },
  { nombre: "Teclado Mecánico", precio: 150.50, stock: 30 },
  { nombre: "Monitor 27 pulgadas", precio: 300.00, stock: 25 }
];

const sqlproductos = 'INSERT INTO productos (nombre, precio , stock) VALUES (?,?,?)'

nuevosProductos.forEach((producto)=> {
  const params = [producto.nombre, producto.precio, producto.stock];
  
  db.run(sqlproductos, params, function(err) {
    if (err) {
      return console.error("Error al insertar producto:", err.message);
    }
    console.log(`Producto "${producto.nombre}" insertado con ID: ${this.lastID}`);
  });
});

