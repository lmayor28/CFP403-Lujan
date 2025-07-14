SELECT
autores.nombre, count(libros.id_libros) as cantidad_libros
FROM autores
INNER JOIN libros on autores.id_autor = libros.id_autor
GROUP by libros.id_autor
;
