// // Ejercicio 1.1
// let numeros = [10, 20, 30, 40, 50];

// for (let i = 0; i < numeros.length; i++) {
// console.log(numeros[i]);
// }

// ¿Qué hace la primera línea?
// Tu análisis aquí:
// Crea un array llamado numeros que contiene cinco elementos numéricos.
// Explica las tres partes del bucle for (let i = 0; i < numeros.length; i++):
// Tu análisis aquí:
// let i = 0: Inicializa el índice i en 0.


// i < numeros.length: Condición para continuar el bucle mientras i sea menor que la longitud del array (5).


// i++: Incrementa i en 1 en cada iteración.


// ¿Qué hace la línea dentro del bucle?
// Tu análisis aquí:
// Imprime el valor actual del array numeros en la posición i.
// ¿Cuál será la salida final en la consola?

// Tu análisis aquí:
// 10
// 20
// 30
// 40
// 50

// // Ejercicio 1.2
// let precios = [15.50, 20.00, 30.25, 10.75];
// let total = 0;

// for (let i = 0; i < precios.length; i++) {
// total = total + precios[i];
// }

// console.log("El total de los precios es: " + total);

// ¿Para qué sirve la variable total y por qué se inicializa en 0?
// Tu análisis aquí:
// Para acumular la suma de todos los precios. Se inicializa en 0 para empezar desde un valor neutro.
// Describe la operación que ocurre dentro del bucle.
// Tu análisis aquí:
// Se va sumando cada precio del array precios a la variable total.
// ¿Cuál es el valor final de total y qué se imprimirá en la consola?
// Tu análisis aquí:
// La suma es: 15.50 + 20.00 + 30.25 + 10.75 = 76.5
// Salida:
// El total de los precios es: 76.5

// // Ejercicio 1.3
// let edades = [15, 22, 17, 30, 12, 25];
// let mayoresDeEdad = [];

// for (let i = 0; i < edades.length; i++) {
// if (edades[i] >= 18) {
//     mayoresDeEdad.push(edades[i]);
// }
// }

// console.log(mayoresDeEdad);

// ¿Cuál es el propósito del array mayoresDeEdad?
// Tu análisis aquí:
// Almacenar solo las edades que son 18 o mayores (mayores de edad).
// Explica la condición if dentro del bucle.
// Tu análisis aquí:
// Verifica si la edad actual es mayor o igual a 18.
// ¿Qué hace el método .push()?
// Tu análisis aquí:
// Agrega el elemento al final del array mayoresDeEdad.
// ¿Cuál será la salida final en la consola?
// Tu análisis aquí:
// Edades mayores de edad: 22, 30, 25
// Salida:
// [22, 30, 25]

// // Ejercicio 1.4
// let matriz = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];

// for (let i = 0; i < matriz.length; i++) {
// let fila = matriz[i];
// console.log("Fila " + i + ":");
// for (let j = 0; j < fila.length; j++) {
//     console.log("  Elemento: " + fila[j]);
// }
// }

// ¿Qué tipo de estructura de datos es matriz?
// Tu análisis aquí:
// Es un array bidimensional (matriz): un array que contiene otros arrays.
// Explica la función del primer bucle for (i).
// Tu análisis aquí:
// Itera por cada fila de la matriz.
// ¿Qué valor tiene la variable fila en cada iteración del primer bucle?
// Tu análisis aquí:
// Una sublista (array) como [1,2,3] en la primera iteración, [4,5,6] en la segunda, etc.
// Explica la función del segundo bucle for (j).
// Tu análisis aquí:
// Recorre cada elemento dentro de la fila actual.
// Describe la salida completa en la consola.
// Tu análisis aquí:
// Fila 0:
// Elemento: 1
// Elemento: 2
// Elemento: 3
// Fila 1:
// Elemento: 4
// Elemento: 5
// Elemento: 6
// Fila 2:
// Elemento: 7
// Elemento: 8
// Elemento: 9

// // Sección 2: Análisis de Funciones

// // Ejercicio 2.1
// ¿Qué son base y altura en la definición de la función?
// Tu análisis aquí:
// Parámetros de entrada que representan las dimensiones del triángulo.
// ¿Qué hace la palabra clave return?
// Tu análisis aquí:
// Devuelve el valor calculado (el área) al lugar donde se llamó la función.
// ¿Qué valores se están pasando a la función?
// Tu análisis aquí:
// 10 como base y 5 como altura.
// ¿Cuál será la salida final en la consola?
// Tu análisis aquí:
//  Área = (10 * 5) / 2 = 25
// Salida:
// El área es: 25
// Ejercicio 2.2
// function agregarImpuesto(precios, impuesto) {
// let preciosConImpuesto = [];
// for (let i = 0; i < precios.length; i++) {
//     let nuevoPrecio = precios[i] * (1 + impuesto);
//     preciosConImpuesto.push(nuevoPrecio);
// }
// return preciosConImpuesto;
// }

// let listaDePrecios = [100, 200, 50];
// let preciosFinales = agregarImpuesto(listaDePrecios, 0.21);

// console.log(preciosFinales);

// Describe qué hace la función agregarImpuesto.
// Tu análisis aquí:
// Calcula el precio final con impuesto para cada producto y devuelve un nuevo array.
// ¿Por qué se suma 1 al impuesto?
// Tu análisis aquí:
// Para aplicar el impuesto directamente como un porcentaje sobre el precio original.
// ¿El array original listaDePrecios es modificado?
// Tu análisis aquí:
// No, se crea y devuelve un nuevo array (preciosConImpuesto).
// ¿Qué se imprimirá en la consola?
// Tu análisis aquí:
// [100×1.21 = 121, 200×1.21 = 242, 50×1.21 = 60.5]
// Salida:
// [121, 242, 60.5]

// // Sección 3: Análisis de Objetos
// // Ejercicio 3.1
// let pelicula = {
// titulo: "Inception",
// director: "Christopher Nolan",
// año: 2010,
// generos: ["Ciencia Ficción", "Acción", "Suspenso"]
// };

// let descripcion = "La película " + pelicula.titulo + 
//                 ", dirigida por " + pelicula.director + 
//                 ", se estrenó en el año " + pelicula.año + ".";

// console.log(descripcion);
// console.log("Primer género: " + pelicula.generos[0]);

// Describe la estructura del objeto pelicula.
// Tu análisis aquí:
// Tiene propiedades con tipos: string, número y array.
// ¿Cómo se accede a titulo, director, año?
// Tu análisis aquí:
// Usando notación de punto: pelicula.titulo, etc.
// ¿Cómo se accede al primer elemento del array generos?
// Tu análisis aquí:
// pelicula.generos[0]
// ¿Qué se imprimirá en la consola?
// Tu análisis aquí:
// La película Inception, dirigida por Christopher Nolan, se estrenó en el año 2010.
// Primer género: Ciencia Ficción

// // Ejercicio 3.2
// let coche = {
// marca: "Ford",
// modelo: "Mustang",
// año: 2020,
// color: "rojo"
// };

// console.log("Propiedades del coche:");
// for (let clave in coche) {
// console.log(clave + ": " + coche[clave]);
// }


// ¿Para qué sirve for...in?
// Para recorrer todas las propiedades de un objeto.
// ¿Qué toma clave en cada iteración?
// El nombre de cada propiedad: "marca", "modelo", etc.
// ¿Por qué coche[clave] y no coche.clave?
// Porque clave es una variable, no un nombre literal.
// Salida:
// Propiedades del coche:
// marca: Ford
// modelo: Mustang
// año: 2020
// color: rojo

// Sección 4: Código Combinado
// Ejercicio 4.1
// ¿Cuál es el objetivo de encontrarEstudiantePorNombre?
// Buscar un estudiante en un array por su nombre.
// ¿Qué pasa si encuentra el nombre?
// Devuelve el objeto del estudiante y se detiene el bucle.
// ¿Cuándo devuelve null?
// Si no encuentra el estudiante.
// ¿Qué hace el bloque if/else final?
// Verifica si se encontró el estudiante y muestra el mensaje correspondiente.
// Salida:
// Estudiante encontrado: { nombre: 'Luis', id: 102, curso: 'Historia' }

// Ejercicio 4.2
// Estructura de misClases:
// Un array de objetos. Cada objeto tiene un nombre de clase y un array de notas.
// ¿Propósito de los bucles?
// Exterior: recorre las clases.


// Interior: suma cada nota de cada clase.


// ¿Valores finales de totalNotas y cantidadNotas?
// Notas: 8+9+7+10+8+9+10+6+7+8 = 82


// Cantidad: 10


// ¿Por qué es importante if (cantidadNotas === 0)?
// Evita una división por 0.
// Salida:
// El promedio general de todas las clases es: 8.2

// Sección 5: Script Completo
// Descripción de inventario:
// Array de objetos. Cada objeto representa un producto con:
// id, nombre, stock, categoria.


// Función venderProducto:
// Recibe un productoId y una cantidad.


// Busca el producto en el inventario.


// Si lo encuentra y hay stock suficiente, resta stock y confirma venta.


// Si no hay stock suficiente, muestra error.


// Si no encuentra el producto, muestra otro error.


// Función obtenerResumenPorCategoria:
// Crea un objeto resumen donde las claves son categorías.


// Suma el stock de los productos por categoría.


// if (resumen[categoria])
// Comprueba si ya hay una clave creada. Si sí, acumula stock. Si no, la crea.
// Ejecución del Script:
// venderProducto("p02", 5)
// Éxito: Quedan 20 unidades.
// → Venta exitosa: 5 de 'Mouse Gamer'. Stock restante: 20.


// venderProducto("p03", 12)
// Falla: solo hay 10.
// → Error: No hay suficiente stock de 'Silla de Oficina'. Disponible: 10.


// venderProducto("p05", 1)
// No existe.
// → Error: Producto con ID 'p05' no encontrado.


// Estado del inventario antes del resumen:
// p01: 15


// p02: 20 (se vendieron 5)


// p03: 10


// p04: 8


// Resumen final:
// Tecnología: 15 (p01) + 20 (p02) + 8 (p04) = 43


// Hogar: 10 (p03)


// Salida final completa:
// --- Inicio de Operaciones ---
// Venta exitosa: 5 de 'Mouse Gamer'. Stock restante: 20.
// Error: No hay suficiente stock de 'Silla de Oficina'. Disponible: 10.
// Error: Producto con ID 'p05' no encontrado.

// --- Resumen de Inventario ---
// Categoría 'Tecnología': 43 unidades en stock.
// Categoría 'Hogar': 10 unidades en stock.

