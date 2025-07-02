
let sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./empresa.db', (err) => {
  if (err) {
    // No se pudo abrir la conexión
    console.error("Error al conectar con la base de datos:", err.message);
  } else {
    // Conexión exitosa
    console.log('Conectado a la base de datos SQLite.');
  }
});