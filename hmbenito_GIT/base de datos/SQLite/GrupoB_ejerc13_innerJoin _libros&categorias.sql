SELECT libros.titulo, categorias.nombre_categoria
FROM libros INNER JOIN categorias
on libros.id_libro=categorias.id_categoria;