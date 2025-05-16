CREATE TABLE libros(
	id_libro INTEGER PRIMARY KEY AUTOINCREMENT,
	titulo VArCHAR (100) NOT NULL,
	id_autor INTEGER,
	año_publicacion INTEGER,
	genero VArCHAR (50) NOT NULL,
	FOREIGN KEY (id_autor) REFERENCES autores (id_autor)
	);
