SELECT libros.titulo,autores.nombre,editoriales.nombre_editorial
FROM libros INNER JOIN autores 
on libros.id_autor=autores.id_autor
INNER JOIN editoriales
on libros.id_editorial=editoriales.id_editorial;