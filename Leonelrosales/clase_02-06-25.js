// Ejercicios Combinados de JavaScript: Bucles for, Arrays y Objetos


// 1. Listar Productos y Precios
// Descripción: Tienes un array de objetos, donde cada objeto representa un producto con un nombre y un precio.
// Tarea: Usa un bucle for para recorrer el array e imprimir en la consola el nombre y el precio de cada producto en el formato: "Producto: [nombre], Precio: $[precio]".

// // 1. Listar Productos y Precios
// const productos = [
// { nombre: "Laptop", precio: 1200 },
// { nombre: "Mouse", precio: 25 },
// { nombre: "Teclado", precio: 75 },
// { nombre: "Monitor", precio: 300 }
// ];
// for (let i = 0; i < productos.length; i++) {
// console.log(`Producto: ${productos[i].nombre}, Precio: $${productos[i].precio}`);
// }


// 2. Estado de Estudiantes
// Descripción: Tienes un array de objetos, donde cada objeto representa a un estudiante con su nombre y su nota.
// Tarea: Usa un bucle for para recorrer el array. Para cada estudiante, añade una nueva propiedad estado al objeto. Si la nota es 7 o más, el estado será "Aprobado"; de lo contrario, será "Reprobado". Finalmente, imprime el array de estudiantes modificado.

// // 2. Estado de Estudiantes
// let estudiantes = [
// { nombre: "Ana", nota: 8 },
// { nombre: "Luis", nota: 5 },
// { nombre: "Marta", nota: 9 },
// { nombre: "Juan", nota: 3 }
// ];
// for (let i = 0; i < estudiantes.length; i++) {
// estudiantes[i].estado = estudiantes[i].nota >= 7 ? "Aprobado" : "Reprobado";
// }
// console.log(estudiantes);


// 3. Filtrar Libros por Páginas
// Descripción: Tienes un array de objetos, donde cada objeto representa un libro con un título y un número de páginas.
// Tarea: Usa un bucle for para crear un nuevo array que contenga únicamente los títulos de los libros que tengan más de 300 páginas. Imprime el nuevo array.

// // 3. Filtrar Libros por Páginas
// const libros = [
// { titulo: "El Principito", paginas: 100 },
// { titulo: "Don Quijote", paginas: 863 },
// { titulo: "Cien Años de Soledad", paginas: 417 },
// { titulo: "Ficciones", paginas: 220 }
// ];
// let titulosLibrosLargos = [];
// for (let i = 0; i < libros.length; i++) {
// if (libros[i].paginas > 300) {
//     titulosLibrosLargos.push(libros[i].titulo);
// }
// }
// console.log(titulosLibrosLargos);


// 4. Calcular Total del Carrito de Compras
// Descripción: Tienes un array de objetos que representan ítems en un carrito de compras. Cada objeto tiene nombre, precioUnitario y cantidad.
// Tarea: Usa un bucle for para calcular el costo total de todos los ítems en el carrito (para cada ítem, el costo es precioUnitario * cantidad). Imprime el total.

// // 4. Calcular Total del Carrito de Compras
// const carrito = [
// { nombre: "Camisa", precioUnitario: 20, cantidad: 2 },
// { nombre: "Pantalón", precioUnitario: 50, cantidad: 1 },
// { nombre: "Zapatos", precioUnitario: 80, cantidad: 1 },
// { nombre: "Medias", precioUnitario: 5, cantidad: 3 }
// ];
// let totalCarrito = 0;
// for (let i = 0; i < carrito.length; i++) {
//   totalCarrito += carrito[i].precioUnitario * carrito[i].cantidad;
// }
// console.log("El total del carrito es: $" + totalCarrito);


// 5. Buscar Usuario por ID
// Descripción: Tienes un array de objetos usuario, cada uno con id y nombre.
// Tarea: Escribe una función buscarUsuarioPorId(usuarios, idBuscado) que reciba el array de usuarios y un idBuscado. La función debe usar un bucle for para encontrar al usuario con ese id. Si lo encuentra, debe devolver el objeto completo del usuario. Si no lo encuentra, debe devolver null (o un mensaje como "Usuario no encontrado").

// // 5. Buscar Usuario por ID
// const usuarios = [
// { id: "u001", nombre: "Pedro", email: "pedro@example.com" },
// { id: "u002", nombre: "Laura", email: "laura@example.com" },
// { id: "u003", nombre: "Santiago", email: "santiago@example.com" }
// ];
// function buscarUsuarioPorId(listaUsuarios, idBuscado) {
// for (let i = 0; i < listaUsuarios.length; i++) {
//     if (listaUsuarios[i].id === idBuscado) {
//     return listaUsuarios[i];
//     }
// }
// return null;
// }
// console.log(buscarUsuarioPorId(usuarios, "u002")); // Devuelve usuario
// console.log(buscarUsuarioPorId(usuarios, "u004")); // Devuelve null


// 6. Contar Coches por Marca
// Descripción: Tienes un array de objetos coche, cada uno con marca y modelo.
// Tarea: Escribe una función contarPorMarca(listaCoches, marcaBuscada) que reciba el array y una marcaBuscada. La función debe usar un bucle for para contar cuántos coches en el array son de esa marcaBuscada. Devuelve el conteo.

// // 6. Contar Coches por Marca
// const flota = [
// { marca: "Toyota", modelo: "Corolla" },
// { marca: "Ford", modelo: "Fiesta" },
// { marca: "Toyota", modelo: "Hilux" },
// { marca: "Honda", modelo: "Civic" },
// { marca: "Toyota", modelo: "RAV4" }
// ];
// function contarPorMarca(listaCoches, marcaBuscada) {
// let contador = 0;
// for (let i = 0; i < listaCoches.length; i++) {
//     if (listaCoches[i].marca === marcaBuscada) {
//     contador++;
//     }
// }
// return contador;
// }
// console.log("Cantidad de Toyota:", contarPorMarca(flota, "Toyota")); // 3
// console.log("Cantidad de Ford:", contarPorMarca(flota, "Ford"));     // 1
// console.log("Cantidad de Fiat:", contarPorMarca(flota, "Fiat"));     // 0


// 7. Resumen de Ventas por Producto
// Descripción: Tienes un array de objetos venta. Cada objeto tiene una propiedad producto (string) y monto (número).
// Tarea: Usa un bucle for (y posiblemente lógica para manejar un objeto) para crear un objeto resumenVentas. Las claves de resumenVentas deben ser los nombres de los productos, y los valores deben ser la suma total de los montos para cada producto.

// // 7. Resumen de Ventas por Producto
// const ventas = [
// { producto: "Manzanas", monto: 50 },
// { producto: "Peras", monto: 30 },
// { producto: "Manzanas", monto: 70 },
// { producto: "Naranjas", monto: 40 },
// { producto: "Peras", monto: 25 },
// { producto: "Manzanas", monto: 20 }
// ];
// let resumenVentas = {};
// for (let i = 0; i < ventas.length; i++) {
// const prod = ventas[i].producto;
// const monto = ventas[i].monto;
// if (!resumenVentas[prod]) {
//     resumenVentas[prod] = monto;
// } else {
//     resumenVentas[prod] += monto;
// }
// }
// console.log(resumenVentas); // { Manzanas: 140, Peras: 55, Naranjas: 40 }


// 8. Formatear Descripciones de Eventos
// Descripción: Tienes un array de objetos evento, cada uno con nombreEvento y fecha.
// Tarea: Usa un bucle for para crear un nuevo array de strings. Cada string en el nuevo array debe tener el formato: "Evento: [nombreEvento] - Fecha: [fecha]". Imprime el nuevo array.

// // 8. Formatear Descripciones de Eventos
// const agenda = [
// { nombreEvento: "Reunión de Equipo", fecha: "2024-06-10" },
// { nombreEvento: "Presentación Cliente", fecha: "2024-06-12" },
// { nombreEvento: "Taller de JavaScript", fecha: "2024-06-15" }
// ];
// let descripcionesEventos = [];
// for (let i = 0; i < agenda.length; i++) {
// descripcionesEventos.push(`Evento: ${agenda[i].nombreEvento} - Fecha: ${agenda[i].fecha}`);
// }
// console.log(descripcionesEventos);


// 9. Listar Estudiantes por Clase (Bucles Anidados)
// Descripción: Tienes un array de objetos clase. Cada objeto clase tiene una propiedad nombreClase y un array estudiantes (que es un array de strings con los nombres de los estudiantes).
// Tarea: Usa bucles for anidados para imprimir el nombre de cada clase, seguido de la lista de sus estudiantes.

// // 9. Listar Estudiantes por Clase (Bucles Anidados)
// const clases = [
// {
//     nombreClase: "Matemáticas Avanzadas",
//     estudiantes: ["Ana", "Juan", "Sofía"]
// },
// {
//     nombreClase: "Historia del Arte",
//     estudiantes: ["Carlos", "Laura"]
// },
// {
//     nombreClase: "Programación Web",
//     estudiantes: ["Pedro", "Elena", "Mario", "Lucía"]
// }
// ];
// for (let i = 0; i < clases.length; i++) {
// console.log(`Clase: ${clases[i].nombreClase}`);
// for (let j = 0; j < clases[i].estudiantes.length; j++) {
//     console.log(`  - ${clases[i].estudiantes[j]}`);
// }
// }


// 10. Actualizar Salarios de Empleados
// Descripción: Tienes un array de objetos empleado. Cada objeto tiene nombre, salario y departamento.
// Tarea: Usa un bucle for para recorrer el array. Para todos los empleados que pertenezcan al departamento de "Ventas", incrementa su salario en un 10%. Además, a estos empleados modificados, añádeles una nueva propiedad booleana aumentoAplicado con el valor true. Imprime el array de empleados modificado.

// // 10. Actualizar Salarios de Empleados
// let empleados = [
// { nombre: "Alicia", salario: 50000, departamento: "Ventas" },
// { nombre: "Bruno", salario: 60000, departamento: "Marketing" },
// { nombre: "Carlos", salario: 55000, departamento: "Ventas" },
// { nombre: "Diana", salario: 70000, departamento: "Tecnología" }
// ];
// for (let i = 0; i < empleados.length; i++) {
// if (empleados[i].departamento === "Ventas") {
//     empleados[i].salario *= 1.10;
//     empleados[i].aumentoAplicado = true;
// }
// }
// console.log(empleados);



