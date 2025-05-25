SELECT
	usuarios.nombre,
	prestamos.fecha_devolucion,
	libros.titulo
FROM prestamos
INNER JOIN
	usuarios on	usuarios.id_usuario = prestamos.id_usuario 
INNER JOIN
	libros on libros.id_libro = prestamos.id_libro
WHERE
	libros.genero = "Novela";
	