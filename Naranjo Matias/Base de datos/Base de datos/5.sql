CREATE TABLE usuarios(
 id_usuarios INTEGER PRIMARY KEY AUTOINCREMENT,
 nombre varchar(100) NOT NULL,
 email varchar(50) UNIQUE,
 fecha_registro date
 );