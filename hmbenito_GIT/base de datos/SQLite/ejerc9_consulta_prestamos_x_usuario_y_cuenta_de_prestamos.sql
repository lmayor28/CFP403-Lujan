SELECT prestamos.fecha_prestamo,usuarios.nombre,count(usuarios.nombre) as cantidadPrestamos
FROM prestamos INNER JOIN usuarios 
on prestamos.id_usuario = usuarios.id_usuario
GROUP by usuarios.nombre;