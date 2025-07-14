// Ejercicio 2.1: Mi Mascota
// 1.	Crea un objeto llamado miMascota.
// 2.	Añádele las siguientes propiedades (claves) con sus respectivos valores:
// o	nombre (string, el nombre de tu mascota o una inventada)
// o	especie (string, ej: "perro", "gato", "pez")
// o	edad (número)
// o	juguetesFavoritos (un array de strings con al menos dos juguetes)
// 3.	Imprime el objeto completo en la consola.

// Ejercicio 2.1: Mi Mascota
// let miMascota = {
// nombre: "Luna",
// especie: "gato",
// edad: 3,
// juguetesFavoritos: ["pelota", "ratón de cuerda"]
// };
// console.log(miMascota);

// 3. Accediendo a las Propiedades de un Objeto
// Hay dos formas principales de acceder a los valores de las propiedades de un objeto:
// 3.1. Notación de Punto (objeto.propiedad)
// Es la forma más común y legible si conoces el nombre exacto de la propiedad y este es un identificador válido de JavaScript (sin espacios, no empieza con número, etc.).
// let estudiante = {
// nombre: "Carlos",
// curso: "JavaScript Avanzado",
// promedio: 8.5
// };
// console.log(estudiante.nombre);   // Imprime "Carlos"
// console.log(estudiante.promedio); // Imprime 8.5

// 3.2. Notación de Corchetes (objeto['propiedad'])
// Es más flexible y es necesaria cuando:
// •	El nombre de la propiedad es una variable.
// •	El nombre de la propiedad contiene caracteres especiales (como espacios) o no es un identificador válido.
// •	El nombre de la propiedad es un número (aunque esto es menos común para objetos generales).
// let producto = {
// "codigo de barras": "123456789", // Clave con espacios
// precio: 25.99,
// stock: 100
// };
// console.log(producto['codigo de barras']); // Imprime "123456789"
// let propiedadAAcceder = "precio";
// console.log(producto[propiedadAAcceder]); // Imprime 25.99

// Ejercicio 3.1: Detalles del Producto
// Usando el objeto libro del ejemplo anterior:
// let libro = {
// titulo: "Cien Años de Soledad",
// autor: "Gabriel García Márquez",
// paginas: 417,
//   "año de publicación": 1967 // Nueva propiedad
// };

// 1.	Imprime el título del libro usando notación de punto.
// 2.	Imprime el autor del libro usando notación de punto.
// 3.	Imprime el "año de publicación" usando notación de corchetes.
// 4.	Crea una variable propiedadDeseada con el valor "paginas". Usa esta variable y la notación de corchetes para imprimir el número de páginas.

// // Ejercicio 3.1: Detalles del Producto
// let libro = {
// titulo: "Cien Años de Soledad",
// autor: "Gabriel García Márquez",
// paginas: 417,
// "año de publicación": 1967
// };

// console.log(libro.titulo);                // Notación de punto
// console.log(libro.autor);                 // Notación de punto
// console.log(libro["año de publicación"]); // Notación de corchetes

// let propiedadDeseada = "paginas";
// console.log(libro[propiedadDeseada]);     // Notación de corchetes con variable

// // Ejercicio 4.1: Actualizando Información del Contacto
// 1.	Crea un objeto contacto con las propiedades nombre ("Juan Pérez") y email ("juan.perez@example.com").
// 2.	Imprime el objeto.
// 3.	Juan cambió su email. Actualiza la propiedad email a "jperez.nuevo@mail.com".
// 4.	Añade una nueva propiedad telefono con el valor "555-1234".
// 5.	Imprime el objeto contacto actualizado.

//// Ejercicio 4.1: Actualizando Información del Contacto
// let contacto = {
// nombre: "Juan Pérez",
// email: "juan.perez@example.com"
// };

// console.log(contacto);

// contacto.email = "jperez.nuevo@mail.com";
// contacto.telefono = "555-1234";

// console.log(contacto);

// 5. Eliminando Propiedades
// Puedes eliminar una propiedad de un objeto usando el operador delete.
// let configuracion = {
//   tema: "oscuro",
//   idioma: "es",
//   notificaciones: true
// };

// console.log("Antes de eliminar:", configuracion);
// delete configuracion.notificaciones;
// console.log("Después de eliminar:", configuracion);
// // Imprime: { tema: 'oscuro', idioma: 'es' }

// El operador delete devuelve true si la eliminación fue exitosa (o si la propiedad no existía), y false si la propiedad es "no configurable" (lo cual es raro para objetos creados de forma simple).
// Ejercicio 5.1: Limpiando Datos del Perfil
// Tienes un objeto perfilUsuario con información potencialmente sensible.
// let perfilUsuario = {
// idUsuario: "user123",
// nombreCompleto: "Ana López",
// direccion: "Calle Falsa 123",
// ultimoLogin: "2024-05-20T10:00:00Z",
// preferenciasTema: "claro"
// };

// 1.	Imprime el objeto perfilUsuario.
// 2.	Decides que direccion y ultimoLogin no deben estar en este objeto para un uso particular. Elimina estas dos propiedades.
// 3.	Imprime el objeto perfilUsuario modificado.


// // Ejercicio 5.1: Limpiando Datos del Perfil
// let perfilUsuario = {
// idUsuario: "user123",
// nombreCompleto: "Ana López",
// direccion: "Calle Falsa 123",
// ultimoLogin: "2024-05-20T10:00:00Z",
// preferenciasTema: "claro"
// };

// console.log("Antes:", perfilUsuario);

// delete perfilUsuario.direccion;
// delete perfilUsuario.ultimoLogin;

// console.log("Después:", perfilUsuario);

// Ejercicio 6.1: Saludo del Robot
// 1.	Crea un objeto robot con las propiedades:
// o	nombre (string, ej: "R2D2")
// o	material (string, ej: "metal")
// 2.	Añade un método llamado saludar al objeto robot.
// 3.	Este método debe devolver un string que diga: "Hola, soy [nombre del robot] y estoy hecho de [material del robot]." (usa this para acceder a las propiedades nombre y material).
// 4.	Llama al método saludar e imprime el resultado.

// // Ejercicio 6.1: Saludo del Robot
// let robot = {
// nombre: "R2D2",
// material: "metal",
// saludar: function() {
//     return `Hola, soy ${this.nombre} y estoy hecho de ${this.material}.`;
// }
// };

// console.log(robot.saludar());

// Ejercicio 6.2: Contador Simple
// Crea un objeto contador con:
// 1.	Una propiedad valorActual inicializada en 0.
// 2.	Un método incrementar() que aumente valorActual en 1.
// 3.	Un método decrementar() que disminuya valorActual en 1.
// 4.	Un método obtenerValor() que devuelva el valorActual.
// Prueba los métodos: incrementa un par de veces, decrementa una vez, y luego obtén e imprime el valor.

// // Ejercicio 6.2: Contador Simple
// let contador = {
// valorActual: 0,
// incrementar: function() {
//     this.valorActual++;
// },
// decrementar: function() {
//     this.valorActual--;
// },
// obtenerValor: function() {
//     return this.valorActual;
// }
// };

// contador.incrementar();
// contador.incrementar();
// contador.decrementar();

// console.log("Valor actual:", contador.obtenerValor()); // 1

// Ejercicio 7.1: Describir un Personaje
// Dado el siguiente objeto:
// let personaje = {
// nombre: "Aragorn",
// raza: "Humano (Dúnedain)",
// clase: "Guerrero / Explorador",
// armaPrincipal: "Andúril"
// };

// Usa un bucle for...in para imprimir cada propiedad y su valor en el formato: "propiedad: valor".

// // Ejercicio 7.1: Describir un Personaje
// let personaje = {
// nombre: "Aragorn",
// raza: "Humano (Dúnedain)",
// clase: "Guerrero / Explorador",
// armaPrincipal: "Andúril"
// };

// for (let propiedad in personaje) {
// console.log(`${propiedad}: ${personaje[propiedad]}`);
// }

// Ejercicio 7.2: Sumar Valores Numéricos de un Objeto
// Dado un objeto que puede contener diferentes tipos de datos:
// let datosMixtos = {
//   a: 10,
//   b: "hola",
//   c: 25,
//   d: true,
//   e: 5
// };

// Usa Object.values() y luego un método de array (como forEach o reduce) para sumar solo los valores que sean números. Imprime la suma total.

// // Ejercicio 7.2: Sumar Valores Numéricos de un Objeto
// let datosMixtos = {
// a: 10,
// b: "hola",
// c: 25,
// d: true,
// e: 5
// };

// let suma = Object.values(datosMixtos).reduce((acum, valor) => {
// return typeof valor === "number" ? acum + valor : acum;
// }, 0);

// console.log("Suma total:", suma); // 40
