CREATE TABLE prestamos(
 id_prestamos INTEGER PRIMARY KEY AUTOINCREMENT,
 id_libros INTEGER,
 id_usuarios INTEGER,
 fecha_prestamo date NOT NULL,
 fecha_devolucion date, 
 FOREIGN KEY (id_libros) REFERENCES libros (id_libros),
 FOREIGN KEY (id_usuarios) REFERENCES usuarios (id_usuarios)
 
 );