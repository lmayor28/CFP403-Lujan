SELECT prestamos.id_libro, libros.titulo, count(prestamos.fecha_prestamo) as cantidadPrestamos 
FROM prestamos INNER JOIN libros 
on prestamos.id_libro = libros.id_libro
GROUP by libros.titulo
ORDER by cantidadPrestamos DESC
LIMIT 5;