const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 75 },
  { nombre: "Monitor", precio: 300 }
];

for (let i = 0 ; i < productos.length; i++) {
  let producto = productos[i]
  console.log("Producto: " + producto.nombre + ", Precio: $" + producto.precio);
}


let estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 5 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Juan", nota: 3 }
];

for (let i = 0 ; i < estudiantes.length; i++) {
  if (estudiantes[i].nota >= 7) {
    estudiantes[i].estado = "aprobado";
  } else {
    estudiantes[i].estado = "desaprobado";
  }
}
console.log(estudiantes)


const libros = [
  { titulo: "El Principito", paginas: 100 },
  { titulo: "Don Quijote", paginas: 863 },
  { titulo: "Cien Años de Soledad", paginas: 417 },
  { titulo: "Ficciones", paginas: 220 }
];

let libro = []

for (let i = 0 ; i < libros.length; i++) {
  if (libros[i].paginas > 300) {
     libro.push(libros[i])
  } 
  
}
console.log(libro)

const carrito = [
  { nombre: "Camisa", precioUnitario: 20, cantidad: 2 },
  { nombre: "Pantalón", precioUnitario: 50, cantidad: 1 },
  { nombre: "Zapatos", precioUnitario: 80, cantidad: 1 },
  { nombre: "Medias", precioUnitario: 5, cantidad: 3 }
];

let preciototal = 0

for (let i = 0 ; i < carrito.length; i++) {
  preciototal += carrito[i].precioUnitario * carrito[i].cantidad 
    
  
 }
console.log("TOTAL $ "+preciototal)

const usuarios = [
  { id: "u001", nombre: "Pedro", email: "pedro@example.com" },
  { id: "u002", nombre: "Laura", email: "laura@example.com" },
  { id: "u003", nombre: "Santiago", email: "santiago@example.com" }
];

function buscarUsuarioPorId(listaUsuarios, idBuscado) {
  for (let i = 0 ; i < usuarios.length; i++) {
    if (listaUsuarios[i].id === idBuscado) {
        
        return listaUsuarios[i]
   }
  }
  return "Usuario no encontrado"
}
console.log(buscarUsuarioPorId(usuarios, "u002"));
console.log(buscarUsuarioPorId(usuarios, "u004"));

const flota = [
  { marca: "Toyota", modelo: "Corolla" },
  { marca: "Ford", modelo: "Fiesta" },
  { marca: "Toyota", modelo: "Hilux" },
  { marca: "Honda", modelo: "Civic" },
  { marca: "Toyota", modelo: "RAV4" }
];

function contarPorMarca(listaCoches, marcaBuscada) {
  let contador = 0
for (let i = 0 ; i < listaCoches.length; i++) {
    if (listaCoches[i].marca === marcaBuscada) {
        contador++;
        
    }
  }
   return contador
 }

console.log("Cantidad de Toyota:", contarPorMarca(flota, "Toyota")); // Debería ser 3
console.log("Cantidad de Ford:", contarPorMarca(flota, "Ford"));   // Debería ser 1
console.log("Cantidad de Fiat:", contarPorMarca(flota, "Fiat"));   // Debería ser 0



 const ventas = [
  { producto: "Manzanas", monto: 50 },
  { producto: "Peras", monto: 30 },
  { producto: "Manzanas", monto: 70 },
  { producto: "Naranjas", monto: 40 },
  { producto: "Peras", monto: 25 },
  { producto: "Manzanas", monto: 20 }
];

  let resumenVentas = {};


for (let i = 0 ; i < ventas.length; i++) {
    let producto = ventas[i].producto
    let monto = ventas[i].monto
  
  if (                 ) {
        
        
    } else {    
  }


 

console.log(resumenVentas);


