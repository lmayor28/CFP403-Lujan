CREATE TABLE usuarios(
   id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
   nombre VARCHAR (100) NOT NULL,
   email VARCHAR (50) NOT NULL UNIQUE,
   fecha_registro date
   );