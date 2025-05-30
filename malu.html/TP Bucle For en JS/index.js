// actividad 1
// for(let i=0;i<10;i++){
//     console.log(i+1)
// }

// actividad 2

// for (let i=1;i<=10;i++){
//     console.log(i*2)
// }

// for (let i=1;i<=21;i++){
//     if (i%2===1){
//         console.log(i)
//     }
// }

// actividad 3

// for (let i=10;i>=1;i--){
//     console.log(i)
// }

//actividad 4

// function sumarPrimerosN(n) {
// let suma=0;
// for (let i=1;i<=n;i++){
//     suma+=i;
// }
//     return suma;
// }

// console.log(sumarPrimerosN(5));  // 15
// console.log(sumarPrimerosN(10)); // 55
// console.log(sumarPrimerosN(1));  // 1

//actividad 5

// const frutas = ["manzana", "banana", "cereza", "dátil"];
// for (let i=0;i<frutas.length;i++){
//     console.log(frutas[i])
// }

// length es para para palabras y no numeros (para el console.log digamos)

// actividad 6

// function factorialConFor(n) {
// let resultado=1;
// for (let i=1;i<=n;i++){
//     resultado*=i;
// }
//     return resultado;
// }


//  console.log(factorialConFor(5)); // 120
//  console.log(factorialConFor(0)); // 1
//  console.log(factorialConFor(1)); // 1
//  console.log(factorialConFor(7)); // 5040

// actividad 7

// function encontrarMaximoConFor(numeros) {
//   if (numeros.length === 0) return undefined;

//   let max = numeros[0];
//   for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > max) {
//       max = numeros[i];
//     }
//   }
//   return max;
// }

//  console.log(encontrarMaximoConFor([10, 5, 25, 8, 17])); // 25
//  console.log(encontrarMaximoConFor([-1, -5, -2]));      // -1
//  console.log(encontrarMaximoConFor([]));                 // undefined o -Infinity

//actividad 8

// function revertirStringConFor(texto) {
// let invertido = "";
// for (let i = texto.length - 1; i >= 0; i--) {
//     invertido += texto[i];
// }
// return invertido;
// }


//  console.log(revertirStringConFor("JavaScript")); // "tpircSavaJ"
//  console.log(revertirStringConFor("osa"));        // "aso"
//  console.log(revertirStringConFor(""));           // ""



//actividad 9

// function generarFibonacci(n) {
//   const fibonacci = [];
//   if (n >= 1) fibonacci.push(0);
//   if (n >= 2) fibonacci.push(1);
//   for (let i = 2; i < n; i++) {
//     const siguiente = fibonacci[i - 1] + fibonacci[i - 2];
//     fibonacci.push(siguiente);
//   }
//   return fibonacci;
// }

//  console.log(generarFibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
//  console.log(generarFibonacci(1));  // [0]
//  console.log(generarFibonacci(2));  // [0, 1]
//  console.log(generarFibonacci(0));  // []