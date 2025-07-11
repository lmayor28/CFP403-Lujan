SELECT
autores.nombre , libros.titulo, libros.ano_publicacion
FROM autores
INNER JOIN libros on libros.id_autor = autores.id_autor
WHERE libros.ano_publicacion < 1980;