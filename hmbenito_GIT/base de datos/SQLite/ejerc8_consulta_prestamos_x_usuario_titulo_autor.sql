SELECT prestamos.fecha_prestamo, usuarios.nombre, libros.titulo,autores.nombre
FROM prestamos INNER JOIN usuarios on prestamos.id_usuario = usuarios.id_usuario
INNER JOIN libros on libros.id_autor = autores.id_autor
INNER JOIN autores on autores.id_autor = libros.id_autor;