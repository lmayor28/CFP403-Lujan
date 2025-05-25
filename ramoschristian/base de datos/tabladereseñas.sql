CREATE TABLE "resenias" (
	"id_resenia"	INTEGER,
	"id_libro"	INTEGER,
	"id_usuario"	INTEGER,
	"calificacion"	INTEGER NOT NULL CHECK("calificacion" >= 1 AND "calificacion" <= 5),
	"comentario_resenia"	TEXT,
	"fecha_resenia"	date,
	PRIMARY KEY("id_resenia" AUTOINCREMENT),
	FOREIGN KEY("id_libro") REFERENCES "LIBROS"("id_libro"),
	FOREIGN KEY("id_usuario") REFERENCES "usuarios"("id_usuario")
);