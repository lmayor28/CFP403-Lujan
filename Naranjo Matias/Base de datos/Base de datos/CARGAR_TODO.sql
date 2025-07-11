-- #############################################################################
-- #                                                                           #
-- #                 SCRIPT DE CREACIÓN Y POBLACIÓN DE TABLAS                  #
-- #                          BASE DE DATOS BIBLIOTECA                         #
-- #                                                                           #
-- #############################################################################

-- Usaremos INTEGER PRIMARY KEY AUTOINCREMENT para compatibilidad con SQLite.
-- Para MySQL/MariaDB, usar INT PRIMARY KEY AUTO_INCREMENT.

-- Eliminar tablas si existen para permitir la re-ejecución del script (opcional, usar con cuidado)
DROP TABLE IF EXISTS reseñas_libros;
DROP TABLE IF EXISTS libros_categorias;
DROP TABLE IF EXISTS prestamos;
DROP TABLE IF EXISTS libros;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS editoriales;
DROP TABLE IF EXISTS autores;
DROP TABLE IF EXISTS usuarios;

-- #############################################################################
-- # CREACIÓN DE TABLAS                                                        #
-- #############################################################################

-- Tabla: autores
CREATE TABLE autores (
    id_autor INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50)
);

-- Tabla: usuarios
CREATE TABLE usuarios (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    fecha_registro DATE
);

-- Tabla: editoriales
CREATE TABLE editoriales (
    id_editorial INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_editorial VARCHAR(150) NOT NULL UNIQUE,
    pais_origen VARCHAR(50),
    ciudad_sede VARCHAR(100),
    año_fundacion INTEGER,
    sitio_web VARCHAR(255)
);

-- Tabla: categorias
-- Esta tabla puede tener categorías jerárquicas (subcategorías)
CREATE TABLE categorias (
    id_categoria INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_categoria VARCHAR(100) NOT NULL UNIQUE,
    descripcion_categoria TEXT,
    id_categoria_padre INTEGER, -- NULL si es una categoría principal
    FOREIGN KEY (id_categoria_padre) REFERENCES categorias(id_categoria)
);

-- Tabla: libros
-- Relacionada con autores y editoriales
CREATE TABLE libros (
    id_libro INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(255) NOT NULL,
    id_autor INTEGER,
    id_editorial INTEGER,
    año_publicacion INTEGER,
    genero VARCHAR(50), -- Género principal, puede complementarse con la tabla categorias
    FOREIGN KEY (id_autor) REFERENCES autores(id_autor),
    FOREIGN KEY (id_editorial) REFERENCES editoriales(id_editorial)
);

-- Tabla: prestamos
-- Relaciona libros con usuarios
CREATE TABLE prestamos (
    id_prestamo INTEGER PRIMARY KEY AUTOINCREMENT,
    id_libro INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE, -- Puede ser NULL si el libro no ha sido devuelto
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Tabla: libros_categorias (Tabla de Unión Muchos-a-Muchos)
-- Relaciona libros con múltiples categorías
CREATE TABLE libros_categorias (
    id_libro INTEGER NOT NULL,
    id_categoria INTEGER NOT NULL,
    PRIMARY KEY (id_libro, id_categoria), -- Clave primaria compuesta
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- Tabla: reseñas_libros
-- Permite a los usuarios calificar y comentar libros
CREATE TABLE reseñas_libros (
    id_reseña INTEGER PRIMARY KEY AUTOINCREMENT,
    id_libro INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    calificacion INTEGER NOT NULL CHECK (calificacion >= 1 AND calificacion <= 5), -- Restricción de 1 a 5
    comentario_reseña TEXT,
    fecha_reseña DATE NOT NULL DEFAULT (strftime('%Y-%m-%d', 'now')), -- Fecha actual por defecto para SQLite
    -- Para MySQL: DEFAULT (CURDATE())
    FOREIGN KEY (id_libro) REFERENCES libros(id_libro),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- #############################################################################
-- # INSERCIÓN DE DATOS DE EJEMPLO                                             #
-- #############################################################################

-- Datos para la tabla: autores
INSERT INTO autores (nombre, nacionalidad) VALUES
('Gabriel García Márquez', 'Colombiana'),
('Isabel Allende', 'Chilena'),
('Mario Vargas Llosa', 'Peruana'),
('Julio Cortázar', 'Argentina'),
('Jorge Luis Borges', 'Argentina'),
('Stephen King', 'Estadounidense'),
('J.K. Rowling', 'Británica'),
('George Orwell', 'Británica'),
('Haruki Murakami', 'Japonesa'),
('Elena Ferrante', 'Italiana');

-- Datos para la tabla: usuarios
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES
('Ana López', 'ana.lopez@example.com', '2023-01-15'),
('Carlos Gómez', 'carlos.gomez@example.com', '2023-02-20'),
('Laura Torres', 'laura.torres@example.com', '2023-03-10'),
('Pedro Sánchez', 'pedro.sanchez@example.com', '2023-04-05'),
('Sofía Ramírez', 'sofia.ramirez@example.com', '2023-05-25'),
('Juan Pérez', 'juan.perez@example.com', '2022-11-30'),
('María Rodríguez', 'maria.r@example.com', '2024-01-05'),
('Luis Fernández', 'luis.f@example.com', '2024-02-10');


-- Datos para la tabla: editoriales
INSERT INTO editoriales (nombre_editorial, pais_origen, ciudad_sede, año_fundacion, sitio_web) VALUES
('Editorial Sudamericana', 'Argentina', 'Buenos Aires', 1939, 'http://www.sudamericana.com.ar'),
('Alfaguara', 'España', 'Madrid', 1964, 'http://www.alfaguara.com'),
('Planeta', 'España', 'Barcelona', 1949, 'http://www.planeta.es'),
('Seix Barral', 'España', 'Barcelona', 1911, 'http://www.seix-barral.es'),
('Anagrama', 'España', 'Barcelona', 1969, 'http://www.anagrama-ed.es'),
('Penguin Random House', 'Estados Unidos', 'Nueva York', 2013, 'http://www.penguinrandomhouse.com'),
('Scribner', 'Estados Unidos', 'Nueva York', 1846, 'http://www.simonandschusterpublishing.com/scribner'),
('Bloomsbury Publishing', 'Reino Unido', 'Londres', 1986, 'http://www.bloomsbury.com');

-- Datos para la tabla: categorias
-- Categorías principales
INSERT INTO categorias (nombre_categoria, descripcion_categoria) VALUES
('Novela', 'Obras narrativas de ficción, usualmente extensas.'),
('Ciencia Ficción', 'Narrativa basada en especulaciones científicas o tecnológicas.'),
('Fantasía', 'Narrativa con elementos sobrenaturales o mágicos.'),
('Misterio', 'Narrativa centrada en la resolución de un crimen o enigma.'),
('Historia', 'Obras que narran o analizan eventos pasados.'),
('Biografía', 'Narración de la vida de una persona.'),
('Poesía', 'Obras literarias escritas en verso.'),
('Ensayo', 'Escritos breves sobre temas diversos desde una perspectiva personal.');

-- Subcategorías (ejemplo)
-- Suponiendo que los IDs de las categorías principales son 1 (Novela), 2 (Ciencia Ficción), etc.
-- Asegúrate de que estos IDs coincidan con los generados si AUTOINCREMENT empieza en 1.
-- Si es necesario, consulta los IDs después de insertar las categorías principales.
-- Para este ejemplo, asumiremos que 'Novela' tiene id_categoria = 1.
INSERT INTO categorias (nombre_categoria, descripcion_categoria, id_categoria_padre) VALUES
('Novela Histórica', 'Novelas ambientadas en un período histórico específico.', 1),
('Novela Romántica', 'Novelas centradas en relaciones amorosas.', 1),
('Distopía', 'Subgénero de la ciencia ficción que describe sociedades indeseables.', 2);


-- Datos para la tabla: libros
-- Asegúrate de que id_autor y id_editorial correspondan a los IDs existentes.
INSERT INTO libros (titulo, id_autor, id_editorial, año_publicacion, genero) VALUES
('Cien años de soledad', 1, 1, 1967, 'Realismo Mágico'),
('La casa de los espíritus', 2, 2, 1982, 'Realismo Mágico'),
('La ciudad y los perros', 3, 4, 1963, 'Novela'),
('Rayuela', 4, 1, 1963, 'Novela Experimental'),
('Ficciones', 5, 5, 1944, 'Cuento'),
('It', 6, 7, 1986, 'Terror'),
('Harry Potter y la piedra filosofal', 7, 8, 1997, 'Fantasía'),
('1984', 8, 6, 1949, 'Ciencia Ficción'),
('Kafka en la orilla', 9, 5, 2002, 'Realismo Mágico'),
('La amiga estupenda', 10, 3, 2011, 'Novela'),
('El otoño del patriarca', 1, 1, 1975, 'Novela'),
('Misery', 6, 7, 1987, 'Thriller Psicológico'),
('El Aleph', 5, 2, 1949, 'Cuento');

-- Datos para la tabla: prestamos
-- Asegúrate de que id_libro y id_usuario correspondan a los IDs existentes.
INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES
(1, 1, '2024-01-10', '2024-01-25'),
(2, 2, '2024-01-15', '2024-02-01'),
(3, 1, '2024-02-05', NULL), -- Libro aún no devuelto
(6, 3, '2024-02-10', '2024-03-01'),
(7, 4, '2024-02-20', NULL), -- Libro aún no devuelto
(1, 5, '2024-03-01', '2024-03-15'),
(8, 6, '2024-03-05', '2024-03-20'),
(10, 7, '2024-03-10', NULL),
(4, 2, '2024-03-12', '2024-04-01'),
(12, 8, '2024-04-01', NULL);


-- Datos para la tabla: libros_categorias
-- Relaciona libros con sus categorías. Asegúrate de que los IDs sean correctos.
-- Ejemplo: 'Cien años de soledad' (id_libro=1) es 'Novela' (id_categoria=1)
INSERT INTO libros_categorias (id_libro, id_categoria) VALUES
(1, 1), -- Cien años de soledad -> Novela
(2, 1), -- La casa de los espíritus -> Novela
(3, 1), -- La ciudad y los perros -> Novela
(4, 1), -- Rayuela -> Novela
(5, 7), -- Ficciones -> Poesía (Aunque son cuentos, para variar. Podría ser 'Cuento' si existiera como categoría)
(5, 8), -- Ficciones -> Ensayo (Algunos podrían considerarse así)
(6, 4), -- It -> Misterio (También Terror, pero usamos Misterio como ejemplo)
(7, 3), -- Harry Potter -> Fantasía
(8, 2), -- 1984 -> Ciencia Ficción
(8, 11), -- 1984 -> Distopía (Subcategoría de Ciencia Ficción)
(9, 1), -- Kafka en la orilla -> Novela
(10, 1), -- La amiga estupenda -> Novela
(11, 1), -- El otoño del patriarca -> Novela
(12, 4), -- Misery -> Misterio (o Thriller)
(13, 7); -- El Aleph -> Poesía (o Cuento)

-- Datos para la tabla: reseñas_libros
-- Asegúrate de que id_libro y id_usuario correspondan a los IDs existentes.
INSERT INTO reseñas_libros (id_libro, id_usuario, calificacion, comentario_reseña, fecha_reseña) VALUES
(1, 1, 5, 'Una obra maestra absoluta. Imprescindible.', '2024-01-28'),
(1, 2, 5, 'Realismo mágico en su máxima expresión. Me encantó.', '2024-02-05'),
(2, 3, 4, 'Muy buena historia, personajes entrañables.', '2024-03-05'),
(6, 4, 5, 'Terrorífico y brillante. Stephen King no decepciona.', '2024-02-25'),
(7, 5, 5, 'El inicio de una saga mágica inolvidable.', '2024-03-18'),
(8, 6, 5, 'Una visión aterradora y profética del futuro. Clásico.', '2024-03-22'),
(10, 1, 4, 'Una historia de amistad muy bien contada.', '2024-03-20'),
(3, 2, 3, 'Interesante, pero un poco denso al principio.', '2024-03-10'),
(6, 1, 4, 'Da mucho miedo, excelente para los amantes del género.', '2024-03-02');

-- #############################################################################
-- # FIN DEL SCRIPT                                                            #
-- #############################################################################

-- Puedes verificar la inserción con algunas consultas SELECT:
-- SELECT * FROM autores;
-- SELECT * FROM libros;
-- SELECT l.titulo, a.nombre AS autor, e.nombre_editorial AS editorial FROM libros l JOIN autores a ON l.id_autor = a.id_autor JOIN editoriales e ON l.id_editorial = e.id_editorial;
-- SELECT * FROM reseñas_libros;
