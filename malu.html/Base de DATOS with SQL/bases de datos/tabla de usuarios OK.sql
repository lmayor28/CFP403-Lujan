CREATE TABLE usuarios (
	id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
	nombre VArCHAR (100) NOT NULL,
	email VArCHAR (50) NOT NULL UNIQUE,
	fecha_registro date
	);