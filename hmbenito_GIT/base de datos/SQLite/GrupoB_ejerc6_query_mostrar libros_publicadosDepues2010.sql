SELECT libros.titulo, libros.año_publicacion
FROM libros
WHERE libros.año_publicacion >= 2010
ORDER by libros.año_publicacion DESC;