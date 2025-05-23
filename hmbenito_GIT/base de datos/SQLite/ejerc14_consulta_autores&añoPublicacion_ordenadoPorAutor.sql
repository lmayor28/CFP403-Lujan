SELECT autores.nombre,libros.año_publicacion
FROM autores INNER JOIN libros
ORDER by	autores.nombre;