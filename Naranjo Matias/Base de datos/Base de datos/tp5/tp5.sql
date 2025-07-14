select * from editoriales;

SELECT nombre , pais_origen FROM editoriales;

SELECT nombre_categoria FROM categorias;

INSERT INTO categorias (nombre_categoria, descripcion_categoria)
VALUES ('Biografías', NULL);

SELECT nombre_categoria FROM categorias WHERE descripcion_categoria = NOT NULL;

SELECT * from resenias WHERE calificacion = 5;

SELECT titulo FROM libros WHERE año_publicacion > 1910 ORDER by año_publicacion DESC;

SELECT nombre FROM editoriales WHERE año_fundacion < 1980 order by nombre;

UPDATE resenias SET fecha_resenia = '2025-05-10' WHERE id_resenia = 8;
UPDATE resenias SET fecha_resenia = '2025-05-11' WHERE id_resenia = 9;
UPDATE resenias SET fecha_resenia = '2024-01-15' WHERE id_resenia = 10;

SELECT comentario_resenia FROM resenias WHERE fecha_resenia = '2024-01-15';


SELECT DISTINCT categorias.nombre_categoria, libros.titulo 
FROM libros 
INNER JOIN libros_categorias ON libros.id_libro = libros_categorias.id_libro 
INNER JOIN categorias ON libros_categorias.id_categoria = categorias.id_categoria; 

SELECT libros.id_libro categorias.id_categoria 
FROM libros_categorias
WHERE id_libro = 10;








