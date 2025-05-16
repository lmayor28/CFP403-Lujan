SELECT prestamos.fecha_prestamo,libros.titulo,usuarios.email
FROM prestamos INNER JOIN libros 
on prestamos.id_libro = libros.id_libro
INNER JOIN usuarios 
on usuarios.id_usuario=prestamos.id_usuario
WHERE libros.titulo="Cien años de soledad";
