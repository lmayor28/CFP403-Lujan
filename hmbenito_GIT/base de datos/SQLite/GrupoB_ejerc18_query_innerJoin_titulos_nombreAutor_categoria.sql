SELECT libros.titulo, autores.nombre,categorias.nombre_categoria
FROM libros INNER JOIN autores
on libros.id_autor=autores.id_autor
INNER JOIN categorias
on categorias.id_categoria=libros_categorias.id_categoria
INNER JOIN libros_categorias
on libros_categorias.id_libro=libros.id_libro;