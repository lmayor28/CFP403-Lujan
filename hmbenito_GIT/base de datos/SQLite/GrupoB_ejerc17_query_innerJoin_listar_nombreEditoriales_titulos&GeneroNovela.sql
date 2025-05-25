SELECT editoriales.nombre_editorial,libros.titulo,libros.genero
FROM editoriales INNER JOIN libros
on editoriales.id_editorial=libros.id_editorial
WHERE libros.genero="Novela";