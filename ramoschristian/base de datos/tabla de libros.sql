CREATE TABLE LIBROS(
  id_libro INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo VARCHAR(100) NOT NULL,
  id_editorial INTEGER,
  id_autor INTEGER,
  anio_publicación INTEGER,
  genero VARCHAR(50) NOT NULL,
  FOREIGN KEY (id_autor) REFERENCES autores (id_autor), 
  FOREIGN KEY  (id_editorial) REFERENCES Editoriales (id_editorial)
  );