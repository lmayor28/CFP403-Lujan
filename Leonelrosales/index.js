//console.log("Hello, World!");
//ejercicio 1: Declara una variable llamada nombre y asignale tu nombre como un string. Imprime su valor usando console.log().
//let nombre = "leonel"; // reemplaza "TuNombre" por el tuyo
//console.log(nombre);

//ejercicio 2 : Declara una variable edad y asignale tu edad como un número. Imprime su valor.
//let edad = 37; // usa tu edad real
//console.log(edad);

//ejercicio 3: Declara una variable esEstudiante y asignale un valor booleano (true o false). Imprime su valor.
//let esEstudiante = true; // o false, según tu caso
//console.log(esEstudiante);

//ejercicio 4: Declara dos variables numéricas. Realiza la suma, resta, multiplicación y división de esos números e imprime cada resultado.
//let numero1 = 10;
//let numero2 = 5;
//console.log("Suma:", numero1 + numero2);
//console.log("Resta:", numero1 - numero2);
//console.log("Multiplicación:", numero1 * numero2);
//console.log("División:", numero1 / numero2);

//ejercicio 5: Declara dos strings, saludo = "Hola" y usuario = "Mundo". Concatena ambos strings para formar "Hola Mundo" e imprímelo. Hazlo también usando plantillas literales (template literals): ${saludo} ${usuario}.
//let saludo = "Hola";
//let usuario = "Mundo";
// Concatenación tradicional
//let mensaje = saludo + " " + usuario;
//console.log(mensaje);
// Template literal
//let mensajeLiteral = `${saludo} ${usuario}`;
//console.log(mensajeLiteral);

//ejercicio 6: Declara una variable sin asignarle ningún valor. Imprime su valor y su tipo usando console.log(variable) y console.log(typeof variable). ¿Qué resultado obtienes?
//let variable;
//console.log(variable);          // Imprime: undefined
//console.log(typeof variable);  // Imprime: "undefined"

//ejercicio 7: Declara una variable y asígnale null. Imprime su valor y su tipo. ¿Qué resultado obtienes con typeof y por qué crees que pasa eso? (Nota: es una particularidad histórica de JS).
//let vacia = null;
//console.log(vacia);            // Imprime: null
//console.log(typeof vacia);    // Imprime: "object"

//ejercicio 8: Usa el operador de asignación +=. Declara una variable contador = 10. Súmale 5 usando contador += 5;. Imprime contador.
//let contador = 10;
//contador += 5;  // equivalente a contador = contador + 5
//console.log(contador); // Resultado: 15

//ejercicio 9: Compara dos números usando == y ===. Imprime los resultados. ¿Cuál es la diferencia si comparas 5 == '5' versus 5 === '5'? Explica por qué pasa eso.
//let numero = 5;
//let texto = '5';
//console.log(numero == texto);   // true → compara solo el valor, no el tipo
//console.log(numero === texto);  // false → compara el valor *y* el tipo
//ejercicio 10: Usa los operadores lógicos && (AND) y || (OR). Declara dos booleanos a = true, b = false. Imprime el resultado de a && b y a || b.
//let a = true;
//let b = false;
//console.log(a && b); // false → ambos deben ser true
//console.log(a || b); // true → al menos uno debe ser true

//ejercicio 11: Usa el operador lógico ! (NOT). Declara un booleano c = true. Imprime el resultado de !c.
//let c = true;
//console.log(!c); // false → niega el valor

//ejercicio 12: Declara una variable numero. Escribe una sentencia if para comprobar si el número es positivo e imprime un mensaje adecuado.
//let numero = 10;
//if (numero > 0) {
//console.log("El número es positivo");
//}

//ejercicio 13: Amplía el ejercicio anterior con un bloque else para imprimir un mensaje si el número es cero o negativo.
//let numero = -3;
//if (numero > 0) {
//console.log("El número es positivo");
//} else {
//console.log("El número es cero o negativo");
//}

//ejercicio 14: Amplía con else if para manejar tres casos: número positivo, número negativo, o cero.
//let numero = 0;
//if (numero > 0) {
//console.log("El número es positivo");
//} else if (numero < 0) {
//console.log("El número es negativo");
//} else {
//console.log("El número es cero");
//}

//ejercicio 15: Declara una variable semáforo con valores posibles "rojo", "amarillo", "verde". Usa una sentencia switch para imprimir la acción que debes tomar ("Detente", "Precaución", "Avanza").
//let semaforo = "amarillo";
//switch (semaforo) {
//case "rojo":
    //console.log("Detente");
//break;
//case "amarillo":
   //console.log("Precaución");
  //  break;
//case "verde":
//    console.log("Avanza");
//    break;
//default:
//    console.log("Color no válido");
//}

//ejercicio 16: Usa un bucle for para imprimir los números del 1 al 10.
//for (let i = 1; i <= 10; i++) {
//    console.log(i);
//}

//ejercicio 17: Usa un bucle while para hacer lo mismo que en el ejercicio anterior.
//let i = 1;
//while (i <= 10) {
//console.log(i);
//i++;
//}

//ejercicio 18: Usa un bucle for para imprimir solo los números pares del 0 al 20.
//for (let i = 0; i <= 20; i++) {
//    if (i % 2 === 0) {
//    console.log(i);
//    }
//}

//ejercicio 19: Declara un array simple (ver más adelante). Usa un bucle for para iterar sobre los elementos del array e imprimirlos uno por uno. (Puedes saltar este y volver después de ver Arrays).
//let frutas = ["manzana", "banana", "naranja"];
//for (let i = 0; i < frutas.length; i++) {
//console.log(frutas[i]);
//}
//ejercicio 20: Usa break dentro de un bucle for para detener la ejecución cuando el contador llegue a 5.
//for (let i = 1; i <= 10; i++) {
//    if (i === 5) {
//      break; // sale del bucle cuando i es 5
//    }
//    console.log(i);
//}

//Ejercicio 21: Declara una función llamada saludar que imprima "¡Hola a todos!" cuando sea llamada. Llama a la función.
// function saludar() {
 // console.log("¡Hola a todos!");
// }
// saludar("Tunombre");

// Ejercicio 22: Modifica la función saludar para que acepte un parámetro nombre e imprima "¡Hola, [nombre]!". Llama a la función con tu nombre.
// function saludar(nombre) {
//     console.log(`¡Hola, ${nombre}!`);
// }
// saludar("Carlos");

//Ejercicio 23: Declara una función llamada sumar que acepte dos parámetros a y b, y devuelva (return) la suma de ambos. Llama a la función y guarda el resultado en una variable, luego imprime la variable.
// function sumar(a, b) {
//     return a + b;
// }

// let resultado = sumar(4, 5);
//   console.log(resultado); // 9


//Ejercicio 24: Escribe una función flecha (=>) que haga lo mismo que la función sumar del ejercicio anterior.
// const sumar = (a, b) => a + b;

// let resultado = sumar(10, 3);
// console.log(resultado); // 13


//Ejercicio 25: Declara una función que no tome parámetros ni devuelva valor explícitamente. ¿Qué devuelve por defecto una función en JavaScript si no usas return? Imprime el resultado de llamarla.
//Arrays:
// function sinRetorno() {
//     console.log("No tengo return");
// }
//   let resultado = sinRetorno(); // ejecuta pero no retorna
//   console.log(resultado); // undefined

//Ejercicio 26: Declara un array llamado frutas con algunos nombres de frutas como strings.
// let frutas = ["manzana", "plátano", "naranja"];

//Ejercicio 27: Imprime el array completo.
// console.log(frutas);

//Ejercicio 28: Imprime el primer elemento del array frutas (recuerda que los índices empiezan en 0).
// console.log(frutas[0]); // "manzana"

//Ejercicio 29: Imprime el último elemento del array frutas usando la propiedad length.
// console.log(frutas[frutas.length - 1]); // "naranja"

//Ejercicio 30: Añade una nueva fruta al final del array usando el método push(). Imprime el array para verificar.
// frutas.push("uva");
// console.log(frutas); // ["manzana", "plátano", "naranja", "uva"]

//Ejercicio 31: Elimina el último elemento del array usando el método pop(). Imprime el array.
// frutas.pop();
// console.log(frutas); // ["manzana", "plátano", "naranja"]

//Ejercicio 32: Itera sobre el array frutas usando un bucle for e imprime cada fruta en una línea separada.
//Objetos:
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

//Ejercicio 33: Declara un objeto llamado persona con las siguientes propiedades: nombre (string), edad (number), y ciudad (string).
// let persona = {
//     nombre: "Ana",
//     edad: 30,
//     ciudad: "Madrid"
// };

//Ejercicio 34: Imprime el objeto persona completo.
// console.log(persona);

//Ejercicio 35: Accede e imprime el valor de la propiedad nombre del objeto persona usando la notación de punto (.).
// console.log(persona.nombre); // "Ana"

//Ejercicio 36: Accede e imprime el valor de la propiedad ciudad usando la notación de corchetes ([]). Esto es útil si el nombre de la propiedad está en una variable.
// console.log(persona["ciudad"]); // "Madrid"

//Ejercicio 37: Añade una nueva propiedad al objeto persona, por ejemplo, profesion, y asígnale un valor. Imprime el objeto actualizado.
// persona.profesion = "Ingeniera";
// console.log(persona);

//Ejercicio 38: Cambia el valor de la propiedad edad del objeto persona. Imprime el objeto actualizado.
// persona.edad = 31;
// console.log(persona);












