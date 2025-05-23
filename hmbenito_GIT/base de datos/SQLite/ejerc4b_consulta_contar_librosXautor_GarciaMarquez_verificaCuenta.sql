SELECT autores.nombre,libros.titulo,libros.genero
FROM autores
INNER JOIN libros
on autores.nombre = "Gabriel García Márquez";