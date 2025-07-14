// 1.1

let sqlite3 = require("sqlite3").verbose();
let bd = new sqlite3.Database(".empresa.db", err => {
    if(err){
        console.error("no se pudo conectar a la base de datos" + err.message);
    } else {
        console.log("la conexion a la base de datos fue exitosa");
    }
})


bd.run(`CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        );
`)


// 1.2


bd.run(`CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            precio REAL NOT NULL,
            stock INTEGER DEFAULT 0
        );
`)


// 2.1


let sql = `INSERT INTO usuarios (nombre,email) VALUES (?, ?);`
let parametros = ["Ana López", "ana.lopez@example.com"];


bd.run(sql,parametros, function(err) {
    if(err){
        console.error("error al insertar" + err.message);
    } else {
        console.log("fila insertada con ID: " + this.lastID);
    }
});


// 2.2


let nuevosUsuarios = [
  { nombre: "Carlos García", email: "carlos.garcia@example.com" },
  { nombre: "Laura Martínez", email: "laura.martinez@example.com" },
  { nombre: "Pedro Rodríguez", email: "pedro.rodriguez@example.com" }
];


nuevosUsuarios.forEach(usuario => {
    bd.run(sql,[usuario.nombre, usuario.email],function(err) {
        if(err){
            console.error("error al insertar: " + err.message);
        } else {
            console.log("fila insertada con ID: " + this.lastID);
        }
    })
})


// 2.3


let sqlProductos = `INSERT INTO productos (nombre,precio,stock) VALUES (?,?,?)`


let nuevosProductos = [
  { nombre: "Laptop Gamer", precio: 1250.75, stock: 15 },
  { nombre: "Teclado Mecánico", precio: 150.50, stock: 30 },
  { nombre: "Monitor 27 pulgadas", precio: 300.00, stock: 25 }
];


nuevosProductos.forEach(producto => {
    bd.run(sqlProductos,[producto.nombre,producto.precio,producto.stock],function(err){
        if(err){
            console.error("error al insertar producto: " + err.message);
        } else {
            console.log("producto insertador en fila: " + this.lastID);
        }
    })
})


// 3.1


let sqlSelect = `SELECT * FROM usuarios`;


bd.all(sqlSelect,[], (err,rows) => {
    if(err) throw error;
    rows.forEach(row => console.log(row.nombre));
});


// 3.2


bd.get(`SELECT * FROM usuarios WHERE id = ?`, [1], (err, row) => {
    if(err) throw err;
    console.log(row ? row.nombre: "Usuario no encontrado");
})


// 3.3


bd.all(`SELECT * FROM usuarios WHERE email LIKE "%@example.com" `, [], (err, rows) => {
    if(err) throw err;
    rows.forEach(row => {
        console.log(row.nombre);
    })
});


// 3.4

let precios = [100, 300];
let sql = `SELECT * FROM productos WHERE precio BETWEEN ? AND ?`;


bd.all(sql,precios, (err,rows) => {
    if(err) throw err;
    rows.forEach(row => {
        console.log(row.nombre);
    });
});


// 3.5


sql = `SELECT nombre FROM usuarios`;


bd.each(sql,[], (err,row) => {
    if(err) throw err;
    console.log(`hola ${row.nombre}`);
}, (err,count) => {
    if(err) throw err;
    console.log("se a saludado a todos los usuarios");
})


// 4.1

sql = `UPDATE usuarios SET email = ? WHERE id = ?`;


bd.run(sql,["CarlosGarcia73@Example.com",3], function(err){
    if(err) return console.log(err.message);
    console.log("la actualizacion fue exitosa");
})


// 4.2


let sql = `UPDATE productos SET stock = stock + ? WHERE id = ?`;




bd.run(sql,[10,3], function(err){
    if(err) return console.log(err.message);
    console.log("el stock fue aumentado en 10 unidades");
})

