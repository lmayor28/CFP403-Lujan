SELECT
libros.titulo, autores.nombre as autor 
FROM libros 
INNER JOIN autores on libros.id_autor = autores.id_autor
WHERE libros.genero = "terror" ;

