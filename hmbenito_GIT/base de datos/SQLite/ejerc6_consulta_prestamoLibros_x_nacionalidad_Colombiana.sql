SELECT autores.nombre,autores.nacionalidad,usuarios.nombre, prestamos.fecha_devolucion 
FROM autores INNER JOIN prestamos on autores.nacionalidad = "Colombiana"
INNER JOIN usuarios on prestamos.id_usuario = usuarios.id_usuario;