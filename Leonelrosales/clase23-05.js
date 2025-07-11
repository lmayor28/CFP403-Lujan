// function suma (a,b){
//     let resv=a+b 
//     retunr nesu;
// };

// let dias_semana = [
//     "lunes",
//     "martes",
//     "miercoles",
//     "jueves",
//     "viernes",
//     "sabado",
//     "domingo",
// ];
// console.log (dias_semana)

// String
// ejemplo1
//  (propiedad) = length
// let longintud = "hola mundo".length

// let palabra = "hola mundo"
// console.log (palabra.length , palabra)

// ejemplo2
// let palabra = "hola mundo"
// "hola mundo".toUpperCase();
// console.log (palabra.toUpperCase())

// ejemplo3
// let palabra = "hola mundo"
// "hola mundo".toLowerCase();
// console.log (palabra.toLowerCase())

// ejemplo4
// let palabra = "hola mundo"
// let sub_palabra = palabra.substring(0,4)
// console.log (sub_palabra)

// ejemplo5
// let palabra = "hola mundo"
// console.log(palabra.indexOf("mundo"));

// ejemplo6
// let palabra = "hola mundo"
// palabra.replace("hola","chau");
// let frase = palabra.replace("hola","chau");
// console.log (frase)

// ejemplo7
// let palabra = "hola mundo"
// console.log (palabra.trim())saca espacios al principio/final

// ejemplo8
// let palabra = "hola mundo"
// let cortado = palabra.slice (0,4);
// console.log (cortado);
// let cortado = palabra.slice (4);
// console.log (cortado);
// let cortado = palabra.slice (-4);
// console.log (cortado);
// let cortado = palabra.slice (5);
// console.log (cortado);
// let cortado = palabra.slice (-5);
// console.log (cortado);

// Ejercicios de analizador de frases clave

// Ejercicio 1: "Analizador de Frases Clave"
// Objetivo: Analizar una frase para extraer informacion clave y transformarla.
// Pasos:
// 1. Funcion: analizarFrasesClave(fraseOriginal)
// 2. Entrada: Una string llamada fraseOriginal.
// 3. Paso 1: Normalizar la frase.
// *Convierte la fraseOriginal a minusculas.
// *Elimina los espacios en blanco al principio y al final.
// *Guarda el resultado en una variable fraseNormalizada.
// 4. Paso 2: Determinar la longitud y el caracter central.
// *Calcula la longitud de fraseNormalizada
// *Si la longitud es impar, encuentra el caracter del medio
// *Si la longitud es par, encuentra los dos caracteres del medio.
// *Almacena esta informacion (longitud y caracter/es central/es) en variables.
// 5. Paso 3: Verificar si contiene una palabra clave-
// *Define una palabra clave fija, por ejemplo: "javascript".
// *Verifica si fraseNormalizada incluye esta palabra clave.
// *Guarda el resultado (booleano) en una variable contienePalabraClave.
// 6. Paso 4: Extraer las primeras y ultimas N letras.
// *Define un numero N (por ejemplo, 5).
// *Extrae las primeras N letras de fraseNormalizada.
// *Extrae las ultimas N letras de fraseNormalizada.
// *Guarda estas subcadenas en variables
// 7. Paso 5: Crear un resumen de la frase.
// *Concatena la frase normalizada, la longitud, el caracter(es central/es, si contiene la palabra clave, las primeras N letras y las ultimas N letras en un sola string.
// *Usa template literals (backticks ´) para construir este resumen de manera legible.

//Respuestas

function analizarFraseClave(fraseOriginal) {
    // Paso 1: Normalizar la frase
    let fraseNormalizada = fraseOriginal.toLowerCase().trim();

    // Paso 2: Determinar longitud y carácter/es central/es
    let longitud = fraseNormalizada.length;
    let caracterCentral;
    if (longitud % 2 === 0) {
    caracterCentral = fraseNormalizada.slice(longitud / 2 - 1, longitud / 2 + 1);
    } else {
    caracterCentral = fraseNormalizada.charAt(Math.floor(longitud / 2));
    }

    // Paso 3: Verificar si contiene la palabra clave
    let palabraClave = "javascript";
    let contienePalabraClave = fraseNormalizada.includes(palabraClave);

    // Paso 4: Extraer primeras y últimas N letras
    let N = 5;
    let primerasN = fraseNormalizada.slice(0, N);
    let ultimasN = fraseNormalizada.slice(-N);

    // Paso 5: Crear el resumen
    let resumen = `Resumen de Frase: ${fraseNormalizada}. Longitud: ${longitud}. Carácter/es central/es: '${caracterCentral}'. Contiene '${palabraClave}': ${contienePalabraClave}. Primeras ${N} letras: '${primerasN}'. Últimas ${N} letras: '${ultimasN}'.`;

    // Salida: Devolver el resumen
    return resumen;
}
// Prueba
console.log(analizarFraseClave("  Aprender JavaScript es divertido y Útil  "));

