// 1. Mini-sistema de Gestión de Tareas
// Descripción del Problema:
// Necesitamos desarrollar un pequeño sistema para llevar un registro de tareas pendientes. El sistema debe permitirnos agregar nuevas tareas, marcar tareas existentes como completadas y obtener una lista de todas las tareas que aún no se han finalizado. Cada tarea se representará como un objeto con una descripción y un estado (completada o no).
// Funcionalidades a Implementar:
// •	Una función agregarTarea(listaDeTareas, descripcionNuevaTarea) que:
// o	Reciba el array actual de tareas y la descripción de la nueva tarea.
// o	Cree un nuevo objeto tarea con la descripcionNuevaTarea y una propiedad completada inicializada en false.
// o	Añada este nuevo objeto tarea al array listaDeTareas.
// o	Devuelva la listaDeTareas actualizada.
// •	Una función marcarTareaComoCompletada(listaDeTareas, descripcionTareaACompletar) que:
// o	Reciba el array de tareas y la descripción de la tarea que se quiere marcar como completada.
// o	Busque en el array la tarea que coincida con descripcionTareaACompletar.
// o	Si la encuentra, cambie su propiedad completada a true.
// o	Devuelva true si la tarea fue encontrada y marcada, o false si no se encontró.
// •	Una función listarTareasPendientes(listaDeTareas) que:
// o	Reciba el array de tareas.
// o	Devuelva un nuevo array que contenga únicamente las descripciones de las tareas cuya propiedad completada sea false.

//// 1. Mini-sistema de Gestión de Tareas
// function agregarTarea(listaDeTareas, descripcionNuevaTarea) {
// const nuevaTarea = {
//     descripcion: descripcionNuevaTarea,
//     completada: false
// };
// listaDeTareas.push(nuevaTarea);
// return listaDeTareas;
// }
// function marcarTareaComoCompletada(listaDeTareas, descripcionTareaACompletar) {
// for (let i = 0; i < listaDeTareas.length; i++) {
//     if (listaDeTareas[i].descripcion === descripcionTareaACompletar) {
//     listaDeTareas[i].completada = true;
//     return true;
//     }
// }
// return false;
// }
// function listarTareasPendientes(listaDeTareas) {
// const pendientes = [];
// for (let i = 0; i < listaDeTareas.length; i++) {
//     if (!listaDeTareas[i].completada) {
//     pendientes.push(listaDeTareas[i].descripcion);
//     }
// }
// return pendientes;
// }
// // Pruebas
// let misTareas = [];
// misTareas = agregarTarea(misTareas, "Hacer la cama");
// misTareas = agregarTarea(misTareas, "Lavar los platos");
// console.log("Pendientes Iniciales:", listarTareasPendientes(misTareas));
// marcarTareaComoCompletada(misTareas, "Hacer la cama");
// console.log("Pendientes Después:", listarTareasPendientes(misTareas));
// console.log("Estado Tareas:", misTareas);

// 2. Analizador Simple de Texto
// Descripción del Problema:
// Queremos construir una herramienta que pueda analizar un fragmento de texto y proporcionar algunas estadísticas básicas sobre él. Específicamente, necesitamos saber cuántas palabras contiene, cuántas oraciones tiene (consideraremos que una oración termina con un punto '.', un signo de exclamación '!' o un signo de interrogación '?'), y cuál es la palabra que aparece con más frecuencia en el texto (sin distinguir entre mayúsculas y minúsculas, e ignorando comas y puntos al final de las palabras para el conteo de frecuencia).
// Funcionalidades a Implementar:
// •	Una función contarPalabras(texto) que:
// o	Reciba un string texto.
// o	Devuelva el número total de palabras. Se considera palabra cualquier secuencia de caracteres separada por espacios.
// •	Una función contarOraciones(texto) que:
// o	Reciba un string texto.
// o	Devuelva el número de oraciones, basándose en la presencia de '.', '!' o '?'.
// •	Una función obtenerPalabraMasFrecuente(texto) que:
// o	Reciba un string texto.
// o	Procese el texto para convertirlo a minúsculas y eliminar signos de puntuación comunes (como ',', '.', '!', '?') de las palabras para un conteo preciso.
// o	Devuelva la palabra que más veces aparece. Si hay un empate, puede devolver cualquiera de las más frecuentes. Si el texto está vacío o no tiene palabras, puede devolver null o un string vacío.
// •	Una función principal analizarTexto(texto) que:
// o	Reciba un string texto.
// o	Utilice las funciones auxiliares anteriores.
// o	Devuelva un objeto con las siguientes propiedades: numeroDePalabras, numeroDeOraciones, palabraMasFrecuente.

// // 2. Analizador Simple de Texto
// function contarPalabras(texto) {
//     if (!texto.trim()) return 0;
// return texto.trim().split(/\s+/).length;
// }
// function contarOraciones(texto) {
// const oraciones = texto.match(/[.!?]/g);
// return oraciones ? oraciones.length : 0;
// }
// function obtenerPalabraMasFrecuente(texto) {
// if (!texto.trim()) return null;
// const limpio = texto.toLowerCase().replace(/[.,!?]/g, '');
// const palabras = limpio.split(/\s+/);
// const conteo = {};
// for (const palabra of palabras) {
//     conteo[palabra] = (conteo[palabra] || 0) + 1;
// }
// let maxPalabra = "";
// let maxCantidad = 0;
// for (const palabra in conteo) {
//     if (conteo[palabra] > maxCantidad) {
//     maxPalabra = palabra;
//     maxCantidad = conteo[palabra];
//     }
// }
// return maxPalabra;
// }
// function analizarTexto(texto) {
// return {
//     numeroDePalabras: contarPalabras(texto),
//     numeroDeOraciones: contarOraciones(texto),
//     palabraMasFrecuente: obtenerPalabraMasFrecuente(texto)
// };
// }
// // Pruebas
// const textoPrueba = "JavaScript es divertido. Muy divertido! ¿No crees? JavaScript es popular.";
// const resultadoAnalisis = analizarTexto(textoPrueba);
// console.log(resultadoAnalisis);

// 3. Simulador de Carrito de Compras
// Descripción del Problema:
// Vamos a simular las operaciones básicas de un carrito de compras online. Necesitamos poder agregar productos al carrito (si un producto ya existe, simplemente actualizamos su cantidad), calcular el costo total de los productos en el carrito, y aplicar un porcentaje de descuento al total.
// Estructura de Datos:
// •	Un producto en el carrito será un objeto con: nombre (string), precio (número), cantidad (número).
// •	El carrito será un array de estos objetos producto.


// // 3. Simulador de Carrito de Compras
// function agregarProductoAlCarrito(carrito, nombreProducto, precioProducto, cantidad) {
// for (let i = 0; i < carrito.length; i++) {
//     if (carrito[i].nombre === nombreProducto) {
//     carrito[i].cantidad += cantidad;
//     return carrito;
//     }
// }
// carrito.push({
//     nombre: nombreProducto,
//     precio: precioProducto,
//     cantidad: cantidad
// });
// return carrito;
// }
// function calcularSubtotal(carrito) {
// let subtotal = 0;
// for (let i = 0; i < carrito.length; i++) {
//     subtotal += carrito[i].precio * carrito[i].cantidad;
// }
// return subtotal;
// }
// function aplicarDescuento(total, porcentajeDescuento) {
//   const montoDescuentado = total * (porcentajeDescuento / 100);
// const totalConDescuento = total - montoDescuentado;
// return {
//     descuentoAplicado: montoDescuentado,
//     totalFinal: totalConDescuento
// };
// }
// function procesarCompra(carrito, porcentajeDescuento) {
// const subtotal = calcularSubtotal(carrito);
// const descuento = aplicarDescuento(subtotal, porcentajeDescuento);
// return {
//     subtotal: subtotal,
//     descuentoAplicado: descuento.descuentoAplicado,
//     totalFinal: descuento.totalFinal
// };
// }
// // Pruebas
// let carritoEjemplo = [];
// carritoEjemplo = agregarProductoAlCarrito(carritoEjemplo, "Libro JS", 30, 1);
// carritoEjemplo = agregarProductoAlCarrito(carritoEjemplo, "Teclado Mecánico", 150, 1);
// carritoEjemplo = agregarProductoAlCarrito(carritoEjemplo, "Libro JS", 30, 2);
// console.log("Carrito:", carritoEjemplo);
// const compraEjemplo = procesarCompra(carritoEjemplo, 15);
// console.log("Resumen Compra:", compraEjemplo);


// 4. Generador de Contraseñas Aleatorias
// Descripción del Problema:
// Se necesita una herramienta para generar contraseñas aleatorias. La herramienta debe permitir especificar la longitud de la contraseña y, opcionalmente, si debe incluir caracteres en mayúsculas, números y/o símbolos.
// Funcionalidades a Implementar:
// •	Una función auxiliar obtenerCaracterAleatorio(conjuntoDeCaracteres) que:
// o	Reciba un string conjuntoDeCaracteres (ej: "abcdef" o "0123456789").
// o	Devuelva un carácter seleccionado al azar de ese string.
// •	Una función principal generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) que:
// o	Reciba la longitud deseada para la contraseña.
// o	Reciba booleanos incluirMayusculas, incluirNumeros, incluirSimbolos.
// o	Construya un conjunto de caracteres base (minúsculas: "abcdefghijklmnopqrstuvwxyz").
// o	Si incluirMayusculas es true, añada las mayúsculas ("ABCDEFGHIJKLMNOPQRSTUVWXYZ") al conjunto.
// o	Si incluirNumeros es true, añada los números ("0123456789") al conjunto.
// o	Si incluirSimbolos es true, añada un conjunto de símbolos comunes (ej: "!@#$%^&*()_+-=[]{}|;:',.<>/?") al conjunto.
// o	Si ningún tipo de carácter adicional es seleccionado (aparte de minúsculas, o si incluso las minúsculas no fueran un default), asegúrese de que haya al menos un conjunto de caracteres para elegir (por defecto, minúsculas).
// o	Genere una contraseña de la longitud especificada, seleccionando caracteres aleatorios del conjunto final construido, usando la función auxiliar.
// o	Devuelva la contraseña generada.

// // 4. Generador de Contraseñas Aleatorias
// function obtenerCaracterAleatorio(conjuntoDeCaracteres) {
//   const indice = Math.floor(Math.random() * conjuntoDeCaracteres.length);
// return conjuntoDeCaracteres.charAt(indice);
// }
// function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
// const minusculas = "abcdefghijklmnopqrstuvwxyz";
// const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numeros = "0123456789";
// const simbolos = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
// let conjuntoFinal = minusculas;
// if (incluirMayusculas) conjuntoFinal += mayusculas;
// if (incluirNumeros) conjuntoFinal += numeros;
// if (incluirSimbolos) conjuntoFinal += simbolos;
// if (!conjuntoFinal) return "";
// let contrasena = "";
// for (let i = 0; i < longitud; i++) {
//     contrasena += obtenerCaracterAleatorio(conjuntoFinal);
// }
// return contrasena;
// }
// // Pruebas
// console.log("Contraseña 1 (L:10, M, N, S):", generarContrasena(10, true, true, true));
// console.log("Contraseña 2 (L:8, solo minúsculas):", generarContrasena(8, false, false, false));
// console.log("Contraseña 3 (L:12, M, N):", generarContrasena(12, true, true, false));
// console.log("Contraseña 4 (L:6, solo símbolos):", generarContrasena(6, false, false, true));

