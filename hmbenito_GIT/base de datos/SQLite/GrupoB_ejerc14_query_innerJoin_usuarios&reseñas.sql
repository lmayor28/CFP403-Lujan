SELECT usuarios.nombre as nombre_usuario, reseñas_libros.comentario_reseña
FROM usuarios INNER JOIN reseñas_libros
on usuarios.id_usuario=reseñas_libros.id_usuario;