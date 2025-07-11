SELECT
usuarios.nombre, libros.titulo, autores.nombre
FROM prestamos
INNER JOIN usuarios on usuarios.id_usuarios = prestamos.id_usuarios
INNER JOIN libros on libros.id_libros = prestamos.id_libros
INNER JOIN autores on autores.id_autor = libros.id_autor;