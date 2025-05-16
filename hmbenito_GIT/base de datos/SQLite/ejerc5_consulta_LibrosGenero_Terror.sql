SELECT libros.titulo,libros.genero,autores.nombre
FROM libros INNER JOIN autores on libros.genero = "Novela";