SELECT libros.titulo,usuarios.nombre as nombre_usuario,editoriales.nombre_editorial
FROM libros INNER JOIN prestamos
on libros.id_libro=prestamos.id_libro
INNER JOIN usuarios
on usuarios.id_usuario=prestamos.id_usuario
INNER JOIN editoriales
on editoriales.id_editorial=libros.id_editorial;
