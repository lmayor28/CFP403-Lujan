CREATE TABLE libros(
 id_libros INTEGER PRIMARY KEY AUTOINCREMENT,
 titulo varchar(100) NOT NULL,
 id_autor INTEGER,
 ano_piblicacion INTEGER,
 genero varchar(50) NOT NULL,
 FOREIGN KEY (id_autor) REFERENCES autores (id_autor)
 );