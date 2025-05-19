SELECT autores.nombre, 
count(libros.titulo)
FROM autores
INNER JOIN libros
on autores.id_autor = libros.id_autor;
