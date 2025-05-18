SELECT DISTINCT libros.genero
FROM libros INNER JOIN prestamos
on libros.id_libro = prestamos.id_libro;