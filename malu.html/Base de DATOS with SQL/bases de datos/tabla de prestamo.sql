CREATE TABLE prestamos (
    id_prestamo INTEGER PRIMARY KEY AUTOINCREMENT, -- O INT AUTO_INCREMENT para MySQL
    id_libro INTEGER,
    id_usuario INTEGER,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE, -- Puede ser NULL si no se ha devuelto
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);