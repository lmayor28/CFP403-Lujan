SELECT libros.titulo,editoriales.nombre_editorial,libros.año_publicacion, editoriales.pais_origen
FROM libros INNER JOIN editoriales
on libros.id_editorial = editoriales.id_editorial
WHERE editoriales.pais_origen="España" AND libros.año_publicacion >2000;
