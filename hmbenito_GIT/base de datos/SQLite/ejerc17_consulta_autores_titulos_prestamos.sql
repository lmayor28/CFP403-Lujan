SELECT usuarios.nombre,libros.titulo,prestamos.fecha_prestamo
FROM usuarios INNER JOIN prestamos
on usuarios.id_usuario = prestamos.id_usuario
INNER JOIN libros
on	libros.id_libro=prestamos.id_libro;