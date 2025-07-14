// // Ejercicio 1: Mini-sistema de Gestión de Tareas
// function agregarTarea(listaDeTareas, descripcionNuevaTarea) {
// let nuevaTarea = {
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
// let pendientes = [];
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
// console.log("Estado de tareas:", misTareas);


// // Ejercicio 2: Analizador Simple de Texto
// function contarPalabras(texto) {
// return texto.trim().split(/\s+/).length;
// }
// function contarOraciones(texto) {
// let oraciones = texto.match(/[.!?]/g);
// return oraciones ? oraciones.length : 0;
// }
// function obtenerPalabraMasFrecuente(texto) {
// let limpio = texto.toLowerCase().replace(/[.,!?]/g, "");
// let palabras = limpio.split(/\s+/);
// let frecuencia = {};
// for (let i = 0; i < palabras.length; i++) {
//     let palabra = palabras[i];
//     if (frecuencia[palabra]) {
//     frecuencia[palabra]++;
//     } else {
//     frecuencia[palabra] = 1;
//     }
// }
// let maxPalabra = "";
// let maxCantidad = 0;
// for (let palabra in frecuencia) {
//     if (frecuencia[palabra] > maxCantidad) {
//     maxCantidad = frecuencia[palabra];
//     maxPalabra = palabra;
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
// // Prueba
// const textoEjemplo = "Hola mundo! Este es un texto de prueba. El mundo es grande, y este texto también.";
// const analisis = analizarTexto(textoEjemplo);
// console.log("Análisis de texto:", analisis);


// // Ejercicio 3: Simulador de Carrito de Compras
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
//   let descuento = total * (porcentajeDescuento / 100);
// return {
//     descuentoAplicado: descuento,
//     totalFinal: total - descuento
// };
// }
// function procesarCompra(carrito, porcentajeDescuento) {
// let subtotal = calcularSubtotal(carrito);
// let descuento = aplicarDescuento(subtotal, porcentajeDescuento);
// return {
//     subtotal: subtotal,
//     descuentoAplicado: descuento.descuentoAplicado,
//     totalFinal: descuento.totalFinal
// };
// }
// // Pruebas
// let miCarrito = [];
// miCarrito = agregarProductoAlCarrito(miCarrito, "Laptop", 1200, 1);
// miCarrito = agregarProductoAlCarrito(miCarrito, "Mouse", 25, 2);
// miCarrito = agregarProductoAlCarrito(miCarrito, "Laptop", 1200, 1); // Actualiza cantidad
// console.log("Carrito actual:", miCarrito);
// let resumen = procesarCompra(miCarrito, 10); // 10% de descuento
// console.log("Resumen de compra:", resumen);


// // Ejercicio 4: Generador de Contraseñas Aleatorias
// function obtenerCaracterAleatorio(conjuntoDeCaracteres) {
//   let indice = Math.floor(Math.random() * conjuntoDeCaracteres.length);
// return conjuntoDeCaracteres.charAt(indice);
// }
// function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
// let minusculas = "abcdefghijklmnopqrstuvwxyz";
// let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let numeros = "0123456789";
// let simbolos = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
// let conjunto = minusculas;
// if (incluirMayusculas) conjunto += mayusculas;
// if (incluirNumeros) conjunto += numeros;
// if (incluirSimbolos) conjunto += simbolos;
// let contrasena = "";
// for (let i = 0; i < longitud; i++) {
//     contrasena += obtenerCaracterAleatorio(conjunto);
// }
// return contrasena;
// }
// // Pruebas
// console.log("Contraseña 1 (12 caracteres, todo):", generarContrasena(12, true, true, true));
// console.log("Contraseña 2 (8 caracteres, solo minúsculas):", generarContrasena(8, false, false, false));
// console.log("Contraseña 3 (10 caracteres, mayúsculas y números):", generarContrasena(10, true, true, false));
// console.log("Contraseña 4 (6 caracteres, solo símbolos):", generarContrasena(6, false, false, true));
