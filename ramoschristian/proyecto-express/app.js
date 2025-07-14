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





bd.run(`CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            precio REAL NOT NULL,
            stock INTEGER DEFAULT 0
        );
`)