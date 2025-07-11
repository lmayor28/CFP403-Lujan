CREATE TABLE autores (
    id_autor INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50)
);

CREATE TABLE editoriales (
    id_editorial INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre varchar(50) NOT NULL,
    pais_origen  varchar(50),
    ciudad_sede  varchar(50),
    año_fundacion INTEGER,
    sitio_web TEXT
);

CREATE TABLE categorias (
    id_categoria INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_categoria varchar(50) UNIQUE NOT NULL,
    descripcion_categoria TEXT
);

CREATE TABLE libros (
    id_libro INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo varchar(255) NOT NULL,
    id_autor INTEGER,
    año_publicacion INTEGER,
    id_editorial INTEGER,
    FOREIGN KEY (id_autor) REFERENCES autores(id_autor),
    FOREIGN KEY (id_editorial) REFERENCES editoriales(id_editorial)
);

CREATE TABLE usuarios (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre varchar(55) NOT NULL,
    email varchar (55) UNIQUE,
    fecha_registro DATE
);

CREATE TABLE libros_categorias (
    id_libro INTEGER NOT NULL,
    id_categoria INTEGER NOT NULL,
    PRIMARY KEY (id_libro, id_categoria),
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE resenias (
    id_resenia INTEGER PRIMARY KEY AUTOINCREMENT,
    id_libro INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    calificacion INTEGER NOT NULL CHECK (calificacion >= 1 AND calificacion <= 5),
    comentario_resenia TEXT,
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE prestamos (
    id_prestamo INTEGER PRIMARY KEY AUTOINCREMENT,
    id_libro INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

INSERT INTO autores (nombre, nacionalidad) VALUES
('Carlos Fuentes', 'Mexicana'),
('Jorge Luis Borges', 'Argentina'),
('William Shakespeare', 'Inglaterra'),
('Emily Dickinson', 'Estadounidense'),
('Charles Dickens', 'Británica'),
('Virginia Woolf', 'Británica'),
('Gabriel García Márquez', 'Colombiana'),
('Oscar Wilde', 'Irlandesa'),
('Leon Tolstoy', 'Rusa'),
('Sylvia Plath', 'Estadounidense');

INSERT INTO editoriales (nombre, pais_origen, ciudad_sede, año_fundacion, sitio_web) VALUES
('Editorial Anagrama', 'España', 'Barcelona', 1969, 'https://www.anagrama-ed.es'),
('Ediciones B', 'España', 'Barcelona', 1986, 'https://www.edicionesb.com'),
('Ediciones Gallo Nero', 'Argentina', 'Buenos Aires', 1990, 'https://www.gallionero.com'),
('Ediciones Destino', 'España', 'Barcelona', 1942, 'https://www.edicionesdestino.com'),
('Grupo Editorial Norma', 'Colombia', 'Bogotá', 1983, 'https://www.grupoeditorialnorma.com'),
('Editorial Roca', 'España', 'Barcelona', 2003, 'https://www.editorialroca.com'),
('Ediciones Taurus', 'España', 'Madrid', 1986, 'https://www.edtaurus.com'),
('Alianza Editorial', 'España', 'Madrid', 1966, 'https://www.alianzaeditorial.es'),
('Editorial Espasa', 'España', 'Madrid', 1860, 'https://www.espasa.es'),
('Editorial Acantilado', 'España', 'Barcelona', 1999, 'https://www.acantilado.es');

INSERT INTO categorias (nombre_categoria, descripcion_categoria) VALUES
('Literatura clásica', 'Obras literarias consideradas fundamentales para la cultura mundial.'),
('Novela gráfica', 'Libros que combinan texto y cómic, también conocidos como novelas gráficas.'),
('Misterio', 'Libros que mantienen un aura de incertidumbre, centrados en resolver enigmas.'),
('Filosofía', 'Obras literarias que exploran la naturaleza de la existencia, el conocimiento y la moral.'),
('Autoayuda', 'Libros diseñados para ayudar a las personas a resolver problemas personales.'),
('Cuentos', 'Narraciones breves que exploran un tema o una historia sencilla.'),
('Teatro', 'Obras dramáticas diseñadas para ser representadas en el escenario.'),
('Psicología', 'Estudios sobre el comportamiento humano y la mente.'),
('Ciencia', 'Libros que exploran el mundo natural a través de la observación y la experimentación.'),
('Política', 'Obras que abordan temas sobre gobierno, sistemas políticos y relaciones internacionales.');

INSERT INTO autores (nombre, nacionalidad) VALUES
('Gabriel García Márquez', 'Colombiana'),
('J.K. Rowling', 'Británica'),
('Haruki Murakami', 'Japonesa'),
('Isabel Allende', 'Chilena'),
('Mario Vargas Llosa', 'Peruana'),
('George Orwell', 'Británica'),
('Franz Kafka', 'Alemana'),
('Margaret Atwood', 'Canadiense'),
('J.R.R. Tolkien', 'Británica'),
('Sylvia Plath', 'Estadounidense');

INSERT INTO libros (titulo, id_autor, año_publicacion, id_editorial) VALUES
('Ficciones', 2, 1944, 1),
('Hamlet', 3, 1600, 2),
('The Bell Jar', 10, 1963, 3),
('Great Expectations', 5, 1861, 4),
('Mrs. Dalloway', 6, 1925, 5),
('One Hundred Years of Solitude', 7, 1967, 6),
('The Picture of Dorian Gray', 8, 7, 6),
('War and Peace', 9, 1869, 8),
('Moby Dick', 10, 1851, 9),
('1984', 5, 1949, 10),
('The Catcher in the Rye', 11, 1951, 4),
('Don Quixote', 12, 1605, 7),
('Pride and Prejudice', 13, 1813, 3),
('The Brothers Karamazov', 14, 1880, 2),
('Crime and Punishment', 14, 1866, 2),
('The Odyssey', 15, -800, 6),
('Anna Karenina', 9, 1877, 9),
('The Great Gatsby', 16, 1925, 10),
('The Road', 17, 2006, 1),
('The Hunger Games', 18, 2008, 5);

INSERT INTO usuarios (nombre, email, fecha_registro) VALUES
('Juan Antonio Ramírez', 'juanr@email.com', '2025-06-01'),
('Carlos Alberto Silva', 'carlosalberto@email.com', '2025-06-02'),
('Luis Fernando Guzmán', 'luisfer@email.com', '2025-06-03'),
('Sofia Moreno', 'sofia@email.com', '2025-06-04'),
('Roberto Martínez', 'roberto@email.com', '2025-06-05'),
('María José Pérez', 'mariajose@email.com', '2025-06-06'),
('Valeria Rodríguez', 'valeria@email.com', '2025-06-07'),
('Felipe Sánchez', 'felipe@email.com', '2025-06-08'),
('Ana Laura Gómez', 'analau@email.com', '2025-06-09'),
('Ricardo Muñoz', 'ricardo@email.com', '2025-06-10');

INSERT INTO usuarios (nombre, email, fecha_registro) VALUES
('Juan Pérez', 'juanperez@email.com', '2025-05-01'),
('Ana López', 'analopez@email.com', '2025-05-02'),
('Carlos Martínez', 'carlos@email.com', '2025-05-03'),
('María García', 'maria@email.com', '2025-05-04'),
('Luis Fernández', 'luis@email.com', '2025-05-05'),
('Marta Ruiz', 'marta@email.com', '2025-05-06'),
('Pedro Sánchez', 'pedro@email.com', '2025-05-07'),
('Laura Rodríguez', 'laura@email.com', '2025-05-08'),
('Sergio Díaz', 'sergio@email.com', '2025-05-09'),
('Isabel González', 'isabel@email.com', '2025-05-10');


INSERT INTO resenias (id_libro, id_usuario, calificacion, comentario_resenia) VALUES
(1, 2, 4, 'Un libro muy profundo que me dejó pensando mucho tiempo.'),
(3, 4, 5, 'Excelente narrativa, me enganchó de principio a fin.'),
(5, 6, 3, 'Es bueno, pero tiene momentos lentos.'),
(7, 8, 5, 'Un clásico que nunca pasa de moda.'),
(9, 10, 4, 'Una novela interesante que explora muchos temas complejos.'),
(11, 12, 5, 'Perfecto para leer en una tarde tranquila.'),
(14, 14, 3, 'No es lo que esperaba, pero tiene su valor histórico.'),
(16, 16, 4, 'Un excelente libro, aunque un poco denso en ocasiones.'),
(18, 18, 5, 'Una obra maestra de la literatura contemporánea.'),
(20, 20, 4, 'Muy entretenido, aunque algunos puntos son predecibles.');

INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES
(1, 2, '2025-06-01', NULL),
(2, 4, '2025-06-02', '2025-06-09'),
(5, 6, '2025-06-03', NULL),
(7, 8, '2025-06-04', '2025-06-11'),
(9, 10, '2025-06-05', NULL),
(11, 12, '2025-06-06', '2025-06-13'),
(14, 14, '2025-06-07', NULL),
(16, 16, '2025-06-08', '2025-06-15'),
(18, 18, '2025-06-09', NULL),
(20, 20, '2025-06-10', '2025-06-17');

INSERT INTO libros_categorias (id_libro, id_categoria) VALUES
(1, 1),
(1, 6),
(2, 1),
(2, 7),
(3, 1),
(3, 8),
(4, 1),
(5, 1),
(5, 8),
(6, 1),
(6, 6),
(7, 1),
(7, 3),
(8, 1),
(8, 10),
(9, 1),
(9, 9),
(10, 1),
(10, 10),
(11, 1),
(11, 8),
(12, 1),
(12, 7),
(13, 1),
(13, 5),
(14, 1),
(14, 4),
(15, 1),
(15, 4),
(16, 1),
(16, 7),
(17, 1),
(17, 5),
(18, 1),
(18, 8),
(19, 1),
(19, 9),
(20, 3),
(20, 10);

















