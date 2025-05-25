SELECT editoriales.año_fundacion,editoriales.nombre_editorial
FROM editoriales
WHERE editoriales.año_fundacion < 1980
ORDER by editoriales.nombre_editorial;