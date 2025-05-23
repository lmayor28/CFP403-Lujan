SELECT usuarios.nombre,libros.titulo,reseñas_libros.calificacion
FROM reseñas_libros INNER JOIN usuarios
on usuarios.id_usuario =reseñas_libros.id_usuario
INNER JOIN libros
on libros.id_libro=reseñas_libros.id_libro
WHERE reseñas_libros.calificacion < 4;
