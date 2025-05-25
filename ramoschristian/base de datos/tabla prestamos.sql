CREATE TABLE prestamos(
id_prestamo INTEGER PRIMARY KEY AUTOINCREMENT,
id_libro INTEGER ,
id_usuario INTEGER ,
fecha_prestamo date NOT NULL,
fecha_devolución date,
FOREIGN KEY (id_libro) REFERENCES LIBROS (id_libro),
FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
);