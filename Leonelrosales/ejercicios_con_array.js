// Ejercicio 1.1: Mi Lista de Compras

// // 1. Crear un array con al menos 3 artículos
// let listaDeCompras = ["Pan", "Leche", "Huevos"];
// // 2. Imprimir el array completo en la consola
// console.log("Lista de compras completa:", listaDeCompras);
// // 3. Imprimir el primer artículo de la lista
// console.log("Primer artículo:", listaDeCompras[0]);
// // 4. Imprimir la cantidad de artículos en la lista
// console.log("Cantidad de artículos:", listaDeCompras.length);

// Ejercicio 2.1: Gestionando Invitados

// // 1. Crear un array invitados con dos nombres
// let invitados = ["Ana", "Joaquin"];
// // 2. Agregar un nuevo invitado al final de la lista
// invitados.push("Luis");
// // 3. Agregar otro invitado al principio de la lista
// invitados.unshift("Marta");
// // 4. Imprimir la lista
// console.log("Lista de invitados:", invitados);
// // 5. Eliminar al último invitado (Carlos no puede venir)
// let invitadoEliminado = invitados.pop();
// // 6. Imprimir la lista actualizada y el nombre del invitado eliminado
// console.log("Lista actualizada:", invitados);
// console.log("Invitado que no puede venir:", invitadoEliminado);

// // Ejercicio 3.1: Duplicar Números
// let numeros = [1, 2, 3, 4, 5];
// let duplicados = [];

// numeros.forEach(function(numero) {
//   duplicados.push(numero * 2);
// });

// console.log("Array original:", numeros);
// console.log("Array duplicado:", duplicados);

// // Ejercicio 4.1: Obtener Subconjunto
// let letras = ['a', 'b', 'c', 'd', 'e', 'f'];
// let subconjunto = letras.slice(2, 5); // 'c' (índice 2) hasta antes de 'f' (índice 5)
// console.log(subconjunto); // ["c", "d", "e"]
// // Ejercicio 4.2: Corregir Lista
// let listaErronea = [10, 20, "error", 40, 50];
// listaErronea.splice(2, 1, 30); // Elimina "error" e inserta 30 en su lugar
// console.log(listaErronea); // [10, 20, 30, 40, 50]
// // Ejercicio 4.3: Verificar Existencia
// let herramientas = ["martillo", "destornillador", "sierra"];
// console.log(herramientas.includes("sierra"));    // true
// console.log(herramientas.includes("taladro"));   // false
// console.log(herramientas.indexOf("destornillador")); // 1
// // Ejercicio 4.4: Precios con IVA
// let preciosSinIVA = [100, 250, 80, 45];
// let preciosConIVA = preciosSinIVA.map(precio => precio * 1.21);
// console.log(preciosConIVA); // [121, 302.5, 96.8, 54.45]
// // Ejercicio 4.5: Filtrar Edades
// let edades = [15, 22, 17, 30, 12, 25];
// let mayoresDeEdad = edades.filter(edad => edad >= 18);
// console.log(mayoresDeEdad); // [22, 30, 25]
// Ejercicio 4.6: Sumar Carrito de Compras
// let carrito = [
// {nombre: "Libro", precio: 20},
// {nombre: "Cuaderno", precio: 5},
// {nombre: "Lápiz", precio: 1}
// ];
// let total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log("Total del carrito:", total); // 26

