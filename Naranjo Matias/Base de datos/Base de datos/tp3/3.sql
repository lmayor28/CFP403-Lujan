SELECT
libros.titulo,  usuarios.nombre
FROM prestamos
INNER JOIN libros on prestamos.id_libros = libros.id_libros
INNER JOIN usuarios on prestamos.id_usuarios = usuarios.id_usuarios
WHERE prestamos.fecha_devolucion = NULL;