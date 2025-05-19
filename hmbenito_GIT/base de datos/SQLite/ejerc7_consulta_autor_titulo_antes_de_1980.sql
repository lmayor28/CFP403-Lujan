SELECT autores.nombre, libros.titulo, libros.año_publicacion
FROM autores INNER JOIN libros on
libros.año_publicacion <= 1980;