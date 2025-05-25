SELECT  prestamos.id_prestamo,libros.titulo,usuarios.nombre
FROM prestamos  INNER JOIN libros on prestamos.id_libro = libros.id_libro
INNER JOIN usuarios on usuarios.id_usuario = prestamos.id_usuario;