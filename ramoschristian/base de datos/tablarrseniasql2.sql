CREATE TABLE libro_categoria(
   id_libro INTEGER,
   id_categoria INTEGER,
   PRIMARY KEY (id_libro,id_categoria),
   FOREIGN KEY (id_libro) REFERENCES LIBROS (id_libro),
   FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria)
   )
  
  