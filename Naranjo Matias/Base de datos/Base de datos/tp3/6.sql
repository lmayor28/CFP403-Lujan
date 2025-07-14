SELECT
usuarios.nombre
from usuarios 
INNER JOIN prestamos on usuarios.id_usuarios = prestamos.id_usuarios
INNER JOIN libros on prestamos.id_libros = libros.id_libros
INNER JOIN autores on libros.id_autor = autores.id_autor
WHERE autores.nacionalidad = "colombiana";