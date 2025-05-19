SELECT libros.titulo,usuarios.nombre AS nombre_usuario, reseñas_libros.calificacion
FROM reseñas_libros INNER JOIN usuarios
on reseñas_libros.id_usuario=usuarios.id_usuario
INNER JOIN libros
on libros.id_libro=reseñas_libros.id_libro;