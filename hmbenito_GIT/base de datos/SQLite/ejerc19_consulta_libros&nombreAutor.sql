SELECT libros.titulo, autores.nombre
FROM libros INNER JOIN autores
on libros.id_autor = autores.id_autor;