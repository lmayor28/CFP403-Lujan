// Trabajo Práctico: Análisis de Código JavaScript - Nivel Intermedio
// Este trabajo práctico eleva la dificultad, pidiéndote que analices scripts más completos donde los conceptos de bucles, arrays, objetos y funciones están profundamente entrelazados. El objetivo es fortalecer tu capacidad para seguir el flujo de datos y la lógica a través de múltiples pasos.
// Ejercicio 1: Formatear Datos de Usuarios
// Descripción: Este script toma un array de objetos con datos de usuarios y lo transforma en un nuevo array de strings formateados, listos para ser mostrados.
// Código a Analizar:
// function formatearUsuarios(listaUsuarios) {
//   let usuariosFormateados = [];

//   for (let i = 0; i < listaUsuarios.length; i++) {
//     let usuario = listaUsuarios[i];
    
//     let nombreCompleto = usuario.nombre + " " + usuario.apellido;
//     let infoEdad = "";

//     if (usuario.edad >= 18) {
//       infoEdad = "(Mayor de edad)";
//     } else {
//       infoEdad = "(Menor de edad)";
//     }

//     let descripcionFinal = "Usuario: " + nombreCompleto + ", Edad: " + usuario.edad + " " + infoEdad;
//     usuariosFormateados.push(descripcionFinal);
//   }

//   return usuariosFormateados;
// }


// let usuarios = [
//   { nombre: "Ana", apellido: "García", edad: 25 },
//   { nombre: "Luis", apellido: "Pérez", edad: 17 },
//   { nombre: "Marta", apellido: "Sánchez", edad: 40 }
// ];

// let descripcionUsuarios = formatearUsuarios(usuarios);
// console.log(descripcionUsuarios);


// Análisis:
// ¿Cuál es el propósito general de la función formatearUsuarios? ¿Qué tipo de dato recibe y qué tipo de dato devuelve?
// Tu análisis aquí:
// Dentro del bucle, ¿cómo se construye la variable nombreCompleto?
// Tu análisis aquí:
// Explica la lógica del bloque if/else. ¿Qué determina el valor de la variable infoEdad?
// Tu análisis aquí:
// Sigue el rastro de la primera iteración del bucle (cuando i es 0). ¿Qué valores tendrán las variables usuario, nombreCompleto, infoEdad y descripcionFinal en esa iteración?
// Tu análisis aquí:
// ¿Cuál será la salida final y completa que se imprimirá en la consola?
// Tu análisis aquí:
// Ejercicio 2: Resumen de Inventario por Categoría
// Descripción: Este script procesa una lista de productos y crea un objeto que resume la cantidad total de stock por cada categoría.
// Código a Analizar:
// function crearResumenInventario(inventario) {
//   let resumen = {}; // Se inicializa un objeto vacío

//   for (let i = 0; i < inventario.length; i++) {
//     let producto = inventario[i];
//     let categoria = producto.categoria;
//     let stock = producto.stock;

//     if (resumen[categoria]) {
//       // Si la categoría ya existe en el resumen, se suma el stock
//       resumen[categoria] = resumen[categoria] + stock;
//     } else {
//       // Si la categoría no existe, se crea y se le asigna el stock
//       resumen[categoria] = stock;
//     }
//   }

//   return resumen;
// }


// let listaProductos = [
//   { nombre: "Laptop", stock: 15, categoria: "Tecnología" },
//   { nombre: "Silla", stock: 10, categoria: "Hogar" },
//   { nombre: "Monitor", stock: 8, categoria: "Tecnología" },
//   { nombre: "Mesa", stock: 5, categoria: "Hogar" },
//   { nombre: "Teclado", stock: 20, categoria: "Tecnología" }
// ];

// let resumenDeStock = crearResumenInventario(listaProductos);
// console.log(resumenDeStock);


// Análisis:
// ¿Cuál es el objetivo de la función crearResumenInventario? Describe la transformación de datos que realiza.
// Tu análisis aquí:
// La variable resumen se inicializa como un objeto vacío {}. ¿Por qué es un objeto y no un array?
// Tu análisis aquí:
// Explica con tus palabras la lógica clave de este script: la condición if (resumen[categoria]). ¿Qué está comprobando exactamente?
// Tu análisis aquí:
// Recorre mentalmente el bucle. ¿Cuál es el estado del objeto resumen después de procesar los dos primeros productos ("Laptop" y "Silla")?
// Tu análisis aquí:
// ¿Cuál es el estado del objeto resumen después de procesar el tercer producto ("Monitor")?
// Tu análisis aquí:
// ¿Cuál será la salida final que se imprimirá en la consola?
// Tu análisis aquí:
// Ejercicio 3: Gestión de un Curso Escolar
// Descripción: El siguiente script simula un pequeño sistema para gestionar un curso. Contiene una estructura de datos principal y dos funciones que operan sobre ella: una para agregar una nueva nota a un estudiante y otra para calcular el promedio de un estudiante específico.
// Código a Analizar:
// // Estructura de datos principal
// let curso = {
//   nombreCurso: "Programación Avanzada",
//   estudiantes: [
//     { id: 's01', nombre: "Juan", notas: [8, 9, 7] },
//     { id: 's02', nombre: "Luis", notas: [10, 8] },
//     { id: 's03', nombre: "Ana", notas: [6, 7, 7, 9] }
//   ]
// };

// // Función para agregar una nota a un estudiante por su ID
// function agregarNota(idEstudiante, nuevaNota) {
//   for (let i = 0; i < curso.estudiantes.length; i++) {
//     if (curso.estudiantes[i].id === idEstudiante) {
//       curso.estudiantes[i].notas.push(nuevaNota);
//       console.log(`Nota ${nuevaNota} agregada a ${curso.estudiantes[i].nombre}.`);
//       return true;
//     }
//   }
//   console.log(`No se encontró al estudiante con ID ${idEstudiante}.`);
//   return false;
// }

// // Función para calcular el promedio de un estudiante por su ID
// function calcularPromedioEstudiante(idEstudiante) {
//   let estudianteEncontrado = null;

//   for (let i = 0; i < curso.estudiantes.length; i++) {
//     if (curso.estudiantes[i].id === idEstudiante) {
//       estudianteEncontrado = curso.estudiantes[i];
//       break; // Salimos del bucle una vez que lo encontramos
//     }
//   }

//   if (estudianteEncontrado === null) {
//     return "Estudiante no encontrado.";
//   }

//   let notas = estudianteEncontrado.notas;
//   if (notas.length === 0) {
//     return 0; // Si no tiene notas, el promedio es 0
//   }

//   let sumaTotal = 0;
//   for (let i = 0; i < notas.length; i++) {
//     sumaTotal += notas[i];
//   }

//   return sumaTotal / notas.length;
// }


// // --- Simulación de Operaciones ---
// console.log("--- Inicio del Proceso ---");

// // Agregamos una nueva nota a Luis
// agregarNota('s02', 10);

// // Calculamos el promedio de Luis
// let promedioLuis = calcularPromedioEstudiante('s02');
// console.log("El promedio de Luis es: " + promedioLuis);

// // Intentamos calcular el promedio de un estudiante que no existe
// let promedioFantasma = calcularPromedioEstudiante('s04');
// console.log("El promedio del estudiante fantasma es: " + promedioFantasma);


// Análisis Integral:
// Describe la estructura de datos del objeto curso. ¿Qué tipos de datos anidados contiene?
// Tu análisis aquí:
// Analiza la función agregarNota. ¿Cómo modifica el objeto original curso? Explica la línea curso.estudiantes[i].notas.push(nuevaNota);.
// Tu análisis aquí:
// Analiza la función calcularPromedioEstudiante. ¿Por qué tiene dos bucles for separados? ¿Cuál es el propósito de cada uno?
// Tu análisis aquí:
// En la misma función calcularPromedioEstudiante, ¿qué hace la palabra clave break? ¿Y por qué es importante la línea if (estudianteEncontrado === null)?
// Tu análisis aquí:
// Sigue la ejecución del script desde la sección "Simulación de Operaciones". ¿Qué se imprime en la consola cuando se llama a agregarNota('s02', 10)?
// Tu análisis aquí:
// Después de llamar a agregarNota, ¿cuál es el contenido del array notas para el estudiante "Luis"?
// Tu análisis aquí:
// Considerando el punto anterior, ¿cuál será el valor de promedioLuis y qué se imprimirá en la consola? Muestra el cálculo.
// Tu análisis aquí:
// Finalmente, ¿cuál es el resultado de llamar a calcularPromedioEstudiante('s04') y qué se imprimirá en la última línea del script?
// Tu análisis aquí:

//// Respuestas
// Ejercicio 1: Formatear Datos de Usuarios
// ¿Cuál es el propósito general de la función formatearUsuarios?
// Tu análisis aquí:
//  La función formatearUsuarios toma un array de objetos de usuarios (con propiedades nombre, apellido y edad) y devuelve un nuevo array de strings. Cada string contiene una descripción formateada del usuario, indicando su nombre completo, edad y si es mayor o menor de edad.
// Dentro del bucle, ¿cómo se construye la variable nombreCompleto?
// Tu análisis aquí:
//  Se crea concatenando el nombre y apellido del usuario usando el operador +:
// let nombreCompleto = usuario.nombre + " " + usuario.apellido;

// Esto da como resultado una cadena con el nombre completo del usuario, por ejemplo: "Ana García".
// Explica la lógica del bloque if/else. ¿Qué determina el valor de la 
// variable infoEdad?
// Tu análisis aquí:
//  El bloque if/else evalúa si la edad del usuario es mayor o igual a 18:
// Si es verdadero, infoEdad recibe "(Mayor de edad)".


// Si es falso, infoEdad recibe "(Menor de edad)".


// Esto clasifica a los usuarios según su mayoría de edad.
// Primera iteración del bucle (i = 0): valores de las variables
// Tu análisis aquí:
//  En i = 0, el primer usuario es:
// { nombre: "Ana", apellido: "García", edad: 25 }

// usuario = { nombre: "Ana", apellido: "García", edad: 25 }


// nombreCompleto = "Ana García"


// infoEdad = "(Mayor de edad)"


// descripcionFinal = "Usuario: Ana García, Edad: 25 (Mayor de edad)"


// ¿Cuál será la salida final y completa que se imprimirá en la consola?
// Tu análisis aquí:
//  La función devuelve un array con tres strings formateados. La consola mostrará:
// [
//   "Usuario: Ana García, Edad: 25 (Mayor de edad)",
//   "Usuario: Luis Pérez, Edad: 17 (Menor de edad)",
//   "Usuario: Marta Sánchez, Edad: 40 (Mayor de edad)"
// ]


// Ejercicio 2: Resumen de Inventario por Categoría
// ¿Cuál es el objetivo de la función crearResumenInventario?
// Tu análisis aquí:
//  La función transforma una lista de productos en un objeto resumen que contiene la suma total de stock agrupado por categoría. Es decir, cuenta cuántas unidades hay en total por cada tipo de producto.
// ¿Por qué resumen es un objeto y no un array?
// Tu análisis aquí:
//  Porque necesitamos asociar claves (categorías) con valores (stock total). Los arrays son estructuras indexadas numéricamente, mientras que los objetos permiten crear pares clave-valor, como:
// { "Tecnología": 43, "Hogar": 15 }

// Explica la lógica del if (resumen[categoria])
// Tu análisis aquí:
//  Esta condición verifica si ya existe una entrada para esa categoría en el objeto resumen. Si existe, se le suma el stock actual; si no, se crea la clave con el valor inicial del stock.
// Estado del objeto resumen después de los dos primeros productos
// Tu análisis aquí:
//  Después de "Laptop" y "Silla":
// {
//   "Tecnología": 15,
//   "Hogar": 10
// }

// Estado del objeto resumen después del tercer producto ("Monitor")
// Tu análisis aquí:
//  "Monitor" también es de la categoría "Tecnología" y tiene 8 de stock:
// {
//   "Tecnología": 23, // 15 + 8
//   "Hogar": 10
// }

// ¿Cuál será la salida final que se imprimirá en la consola?
// Tu análisis aquí:
//  El objeto final será:
// {
//   "Tecnología": 43, // 15 + 8 + 20
//   "Hogar": 15        // 10 + 5
// }


// Ejercicio 3: Gestión de un Curso Escolar

// Describe la estructura del objeto curso
// Tu análisis aquí:
//  Es un objeto que representa un curso con dos propiedades:
// nombreCurso (string)


// estudiantes (array de objetos), donde cada estudiante tiene:


// id (string)


// nombre (string)


// notas (array de números)
// { id: 's01', nombre: "Juan", notas: [8, 9, 7] }

// Analiza la función agregarNota
// Tu análisis aquí:
//  Esta función modifica directamente el array de notas del estudiante encontrado. La línea:
// curso.estudiantes[i].notas.push(nuevaNota);

// Agrega la nueva nota al final del array de notas del estudiante correspondiente.
// ¿Por qué calcularPromedioEstudiante tiene dos bucles for?
// Tu análisis aquí:
// Primer bucle: Busca al estudiante por su ID.


// Segundo bucle: Recorre su array de notas para sumar los valores y calcular el promedio.
// ¿Qué hace break y por qué es importante if (estudianteEncontrado === null)?
// Tu análisis aquí:
// break detiene el bucle una vez que se encuentra el estudiante, mejorando eficiencia.


// if (estudianteEncontrado === null) verifica si no se encontró ningún estudiante con ese ID. Si es así, se devuelve un mensaje de error.
// ¿Qué se imprime cuando se llama a agregarNota('s02', 10)?
// Tu análisis aquí:
//  Luis es encontrado y se le agrega la nota 10. Se imprime:
// Nota 10 agregada a Luis.

// Después de agregar la nota, ¿qué contiene notas de Luis?
// Tu análisis aquí:
//  Inicialmente: [10, 8]
//  Después de agregarNota('s02', 10):
// [10, 8, 10]

// ¿Cuál será el valor de promedioLuis y qué se imprime?
// Tu análisis aquí:
//  Cálculo del promedio:
// (10 + 8 + 10) / 3 = 28 / 3 ≈ 9.333…

// Y se imprime:

// El promedio de Luis es: 9.333333333333334


