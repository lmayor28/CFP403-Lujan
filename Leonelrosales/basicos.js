// <!-- 1. Imprimir Números del 1 al 10
// Objetivo: Entender la estructura básica del bucle for: inicialización, condición y expresión final (incremento).
// Problema: Escribe un código que use un bucle for para imprimir en la consola los números del 1 al 10, cada uno en una nueva línea.
// Tu Solución: -->
// for (let i = 2; i <= 10; i++) {
//     console.log(i);
// }

// <!-- 2. Imprimir Números Pares hasta el 20
// Objetivo: Usar una condición dentro del bucle o ajustar el incremento para seleccionar elementos específicos.
// Problema: Escribe un código que use un bucle for para imprimir en la consola solo los números pares desde el 2 hasta el 20 inclusive.
// Tu Solución:
// for (let i = 1; i <= 20; i++) {
// if (i % 2 === 0) {
//     console.log(i);
// }
// }

// 3. Contar Hacia Atrás desde 10 hasta 1
// Objetivo: Practicar el uso de un decremento en la expresión final del bucle for.
// Problema: Escribe un código que use un bucle for para imprimir en la consola los números del 10 al 1, en orden descendente.
// Tu Solución:
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 4. Sumar los Primeros N Números Naturales
// Objetivo: Usar un bucle for para acumular un valor.
// Problema: Escribe una función sumarPrimerosN(n) que reciba un número n y devuelva la suma de todos los números naturales desde 1 hasta n.
// Ejemplo: sumarPrimerosN(5) debería devolver 15 (1+2+3+4+5).
// Tu Solución:
// function sumarPrimerosN(n) {
//     let suma = 0;
//     for (let i = 1; i <= n; i++) {
//     suma += i;
//     }
//     return suma;
// }

// console.log(sumarPrimerosN(5));  // 15
// console.log(sumarPrimerosN(10)); // 55
// console.log(sumarPrimerosN(1));  // 1


// 5. Imprimir los Elementos de un Array
// Objetivo: Usar un bucle for para iterar sobre los elementos de un array utilizando su índice.
// Problema: Dado un array de strings, por ejemplo ["manzana", "banana", "cereza", "dátil"], escribe un código que use un bucle for para imprimir cada elemento del array en la consola.
// // Tu Solución:
// const frutas = ["manzana", "banana", "cereza", "dátil"];

// for (let i = 0; i < frutas.length; i++) {
// console.log(frutas[i]);
// }


// Ejercicios Intermedios con Bucle for
// 6. Calcular el Factorial de un Número
// Objetivo: Aplicar el bucle for para un cálculo matemático iterativo. El factorial de n (n!) es el producto de todos los enteros positivos menores o iguales a n. (Ej: 5! = 5 * 4 * 3 * 2 * 1 = 120). 0! es 1.
// Problema: Escribe una función factorialConFor(n) que calcule el factorial de n usando un bucle for.
// Ejemplo: factorialConFor(5) debería devolver 120.
// Tu Solución:
// function factorialConFor(n) {
// let resultado = 1;
// for (let i = 1; i <= n; i++) {
//     resultado *= i;
// }
// return resultado;
// }
// // Pruebas
// console.log(factorialConFor(5)); // 120
// console.log(factorialConFor(0)); // 1
// console.log(factorialConFor(1)); // 1
// console.log(factorialConFor(7)); // 5040

// 7. Encontrar el Número Más Grande en un Array
// Objetivo: Iterar sobre un array y mantener un registro del valor máximo encontrado.
// Problema: Escribe una función encontrarMaximoConFor(numeros) que reciba un array de números y devuelva el número más grande del array. Si el array está vacío, puede devolver undefined o -Infinity.
// Ejemplo: encontrarMaximoConFor([3, 7, 2, 9, 4]) debería devolver 9.
// Tu Solución:
// function encontrarMaximoConFor(numeros) {
//     if (numeros.length === 0) {
//       return undefined; // o return -Infinity;
//     }

//     let maximo = numeros[0];
//     for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > maximo) {
//         maximo = numeros[i];
//     }
//     }

//     return maximo;
// }

//   // Pruebas
//   console.log(encontrarMaximoConFor([10, 5, 25, 8, 17])); // 25
//   console.log(encontrarMaximoConFor([-1, -5, -2]));       // -1
//   console.log(encontrarMaximoConFor([]));                // undefined


// 8. Revertir un String
// Objetivo: Construir un nuevo string iterando sobre el original en orden inverso.
// Problema: Escribe una función revertirStringConFor(texto) que reciba un string y devuelva un nuevo string con los caracteres en orden inverso.
// Ejemplo: revertirStringConFor("hola") debería devolver "aloh".
// Tu Solución:
// function revertirStringConFor(texto) {
//     let invertido = "";
//     for (let i = texto.length - 1; i >= 0; i--) {
//     invertido += texto[i];
//     }
//     return invertido;
// }

//   // Pruebas
//   console.log(revertirStringConFor("JavaScript")); // "tpircSavaJ"
//   console.log(revertirStringConFor("oso"));        // "oso"
//   console.log(revertirStringConFor(""));           // ""

// 9. Generar una Secuencia de Fibonacci
// Objetivo: Usar un bucle for para generar una secuencia donde cada número es la suma de los dos anteriores. La secuencia de Fibonacci comienza comúnmente con 0 y 1.
// Problema: Escribe una función generarFibonacci(n) que genere los primeros n números de la secuencia de Fibonacci y los devuelva en un array.
// Ejemplo: generarFibonacci(8) debería devolver [0, 1, 1, 2, 3, 5, 8, 13].
// Tu Solución:
// function generarFibonacci(n) {
//     const fibonacci = [];
//     if (n >= 1) fibonacci.push(0);
//     if (n >= 2) fibonacci.push(1);
//     for (let i = 2; i < n; i++) {
//     const siguiente = fibonacci[i - 1] + fibonacci[i - 2];
//     fibonacci.push(siguiente);
//     }
//     return fibonacci;
// }

//   // Pruebas
//   console.log(generarFibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
//   console.log(generarFibonacci(1));  // [0]
//   console.log(generarFibonacci(2));  // [0, 1]
//   console.log(generarFibonacci(0));  // []

// 10. Dibujar un Triángulo de Asteriscos
// Objetivo: Usar bucles for anidados para crear patrones.
// Problema: Escribe una función dibujarTriangulo(altura) que reciba un número altura e imprima en la consola un triángulo de asteriscos de esa altura.
// Ejemplo: dibujarTriangulo(4) debería imprimir:
// *
// **
// ***
// ****

// Tu Solución:
//     function dibujarTriangulo(altura) {
//         for (let i = 1; i <= altura; i++) {
//         console.log('*'.repeat(i));
//         }
//     }
    
//       // Pruebas
//     dibujarTriangulo(4);
//     dibujarTriangulo(1);
//     dibujarTriangulo(6);

