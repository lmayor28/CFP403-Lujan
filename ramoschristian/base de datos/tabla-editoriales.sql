CREATE TABLE Editoriales(
    id_editorial  INTEGER PRIMARY KEY AUTOINCREMENT,
	nombre VARCHAR(100) NOT NULL,
	pais_origen VARCHAR(50) NOT NULL,
	ciudad_sede VARCHAR(50) NOT NULL,
	año_fundación INTEGER NOT NULL,
	sitio_web VARCHAR(50)
	);