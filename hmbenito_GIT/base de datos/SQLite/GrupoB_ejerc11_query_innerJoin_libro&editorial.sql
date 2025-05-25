SELECT libros.titulo,editoriales.nombre_editorial
FROM libros INNER JOIN editoriales 
on libros.id_editorial=editoriales.id_editorial;