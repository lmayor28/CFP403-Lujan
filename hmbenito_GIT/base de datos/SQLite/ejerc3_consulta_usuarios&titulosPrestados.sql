SELECT usuarios.nombre, prestamos.fecha_devolucion,libros.titulo
FROM usuarios INNER JOIN prestamos on usuarios.id_usuario = prestamos.id_usuario
INNER JOIN libros on libros.id_libro=prestamos.id_libro;