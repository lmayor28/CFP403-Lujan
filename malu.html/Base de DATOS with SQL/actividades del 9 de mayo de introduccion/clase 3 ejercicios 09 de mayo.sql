--actividad1
--SELECT * FROM libro LIMIT 3

--actividad2
--SELECT * FROM libro LIMIT 3 OFFSET 3

--actividad3
--SELECT usuarios.nombre,id_usuario FROM usuarios LIMIT 4 
--SELECT usuarios.nombre,id_usuario FROM usuarios LIMIT 4 OFFSET 4

--actividad4
--SELECT  p.id_usuario, p.fecha_devolucion, p.id_libro FROM prestamos AS p

--actividad5
--SELECT libros.id_libro, libros.id_autor FROM libros;
--SELECT libros.id_libro,id_autor FROM libros; 

--actividad6
--SELECT usuarios.nombre, prestamos.fecha_devolucion, libros.titulo FROM prestamos INNER JOIN usuarios on usuarios.id_usuario=prestamos.id_usuario 
--INNER JOIN libros on libros.id_libro=prestamos.id_libro



