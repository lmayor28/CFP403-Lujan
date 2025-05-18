SELECT autores.nacionalidad,libros.titulo,autores.nombre,prestamos.fecha_prestamo
FROM autores INNER JOIN libros
on  autores.id_autor=libros.id_autor
INNER JOIN prestamos on prestamos.id_libro = libros.id_libro;