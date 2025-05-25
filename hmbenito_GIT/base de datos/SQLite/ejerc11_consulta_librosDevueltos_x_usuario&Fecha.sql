SELECT prestamos.fecha_devolucion,libros.titulo,usuarios.nombre
FROM prestamos INNER JOIN usuarios on prestamos.id_usuario = usuarios.id_usuario
INNER JOIN libros on libros.id_libro = prestamos.id_libro
WHERE prestamos.fecha_devolucion NOTNULL;