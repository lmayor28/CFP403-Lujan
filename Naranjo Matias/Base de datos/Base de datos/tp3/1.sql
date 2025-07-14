SELECT 
libros.titulo, autores.nombre as nombre_autor 
FROM libros 
INNER JOIN autores
on autores.id_autor = libros.id_autor;