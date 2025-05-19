-- Datos para la tabla autores
INSERT INTO autores (nombre, nacionalidad) VALUES ('Gabriel García Márquez', 'Colombiana');
INSERT INTO autores (nombre, nacionalidad) VALUES ('Jane Austen', 'Británica');
INSERT INTO autores (nombre, nacionalidad) VALUES ('George Orwell', 'Británica');
INSERT INTO autores (nombre, nacionalidad) VALUES ('Haruki Murakami', 'Japonesa');
INSERT INTO autores (nombre, nacionalidad) VALUES ('Isabel Allende', 'Chilena');
INSERT INTO autores (nombre, nacionalidad) VALUES ('Julio Cortázar', 'Argentina');
INSERT INTO autores (nombre, nacionalidad) VALUES ('Jorge Luis Borges', 'Argentina');
INSERT INTO autores (nombre, nacionalidad) VALUES ('Virginia Woolf', 'Británica');
INSERT INTO autores (nombre, nacionalidad) VALUES ('Ernest Hemingway', 'Estadounidense');
INSERT INTO autores (nombre, nacionalidad) VALUES ('Franz Kafka', 'Checa');


-- Datos para la tabla libros
-- Asumiendo que los autores insertados anteriormente tienen IDs del 1 al 10
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Cien años de soledad', 1, 1967, 'Realismo mágico');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Orgullo y prejuicio', 2, 1813, 'Romance');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('1984', 3, 1949, 'Distopía');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Tokio Blues (Norwegian Wood)', 4, 1987, 'Novela');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('La casa de los espíritus', 5, 1982, 'Realismo mágico');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Rayuela', 6, 1963, 'Ficción');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Ficciones', 7, 1944, 'Cuentos');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('La señora Dalloway', 8, 1925, 'Novela');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('El viejo y el mar', 9, 1952, 'Novela');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('La metamorfosis', 10, 1915, 'Novela');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Crónica de una muerte anunciada', 1, 1981, 'Realismo mágico');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Sentido y sensibilidad', 2, 1811, 'Romance');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Rebelión en la granja', 3, 1945, 'Sátira');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Kafka en la orilla', 4, 2002, 'Realismo mágico');
INSERT INTO libros (titulo, id_autor, año_publicacion, genero) VALUES ('Eva Luna', 5, 1987, 'Realismo mágico');


-- Datos para la tabla usuarios
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Ana Gómez', 'ana.gomez@email.com', '2023-01-10');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Luis Pérez', 'luis.perez@email.com', '2023-01-15');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Maria Rodríguez', 'maria.r@email.com', '2023-02-01');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Carlos Fernández', 'carlos.f@email.com', '2023-02-10');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Laura López', 'laura.l@email.com', '2023-03-05');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Pedro Sánchez', 'pedro.s@email.com', '2023-03-10');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Sofía García', 'sofia.g@email.com', '2023-03-15');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Javier Martínez', 'javier.m@email.com', '2023-04-01');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Elena Díaz', 'elena.d@email.com', '2023-04-05');
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES ('Miguel Ruiz', 'miguel.r@email.com', '2023-04-10');


-- Datos para la tabla prestamos
-- Asumiendo que los libros tienen IDs del 1 al 15 y los usuarios del 1 al 10
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (1, 1, '2023-03-10', '2023-04-01'); -- Cien Años (devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (3, 2, '2023-03-15', NULL); -- 1984 (no devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (2, 3, '2023-03-20', '2023-04-15'); -- Orgullo (devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (5, 4, '2023-04-01', NULL); -- Casa Esp (no devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (4, 1, '2023-04-05', '2023-05-01'); -- Tokio Blues (devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (3, 5, '2023-04-10', NULL); -- 1984 (otro user, no devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (6, 2, '2023-04-12', '2023-05-05'); -- Rayuela (devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (7, 3, '2023-04-15', NULL); -- Ficciones (no devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (8, 4, '2023-04-20', '2023-05-10'); -- Sra Dalloway (devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (9, 5, '2023-04-25', NULL); -- Viejo y Mar (no devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (10, 6, '2023-05-01', '2023-05-20'); -- Metamorfosis (devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (1, 7, '2023-05-05', NULL); -- Cien Años (otro user, no devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (11, 8, '2023-05-10', '2023-06-01'); -- Cronica (devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (12, 9, '2023-05-15', NULL); -- Sentido (no devuelto)
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (13, 10, '2023-05-20', '2023-06-15'); -- Rebelion (devuelto)