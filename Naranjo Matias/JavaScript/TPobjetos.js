let miMascota = [{
    nombre: "simona", 
    especie: "gato", 
    edad: 13, 
    juguetesFavoritos: ["caja","palito"]
} ]

console.log(miMascota)

let libro = {
  titulo: "Cien Años de Soledad",
  autor: "Gabriel García Márquez",
  paginas: 417,
  "año de publicación": 1967 // Nueva propiedad
};

console.log(libro.titulo)
console.log(libro.autor)
console.log(libro["año de publicación"])

let porpiedadDesesada = "paginas"
console.log(libro[porpiedadDesesada])

let usuario = {
    nombre: "elena",
    activo: true
}

console.log("activo antes:", usuario.activo)
usuario.activo = false
console.log("activo despues:", usuario.activo)
console.log( usuario)

// eje 4.1

contacto = [{
    Nombre: "juan perez",
    Email: "juan.perez@example.com"
}]

console.log(contacto)
contacto["email"] = "jperez.nuevo@Mail.com"
console.log(contacto)
contacto.Telefono = "555-1234"
console.log(contacto)

let perfilUsuario = {
  idUsuario: "user123",
  nombreCompleto: "Ana López",
  direccion: "Calle Falsa 123",
  ultimoLogin: "2024-05-20T10:00:00Z",
  preferenciasTema: "claro"
};

console.log(perfilUsuario)
delete perfilUsuario.direccion
delete perfilUsuario.ultimoLogin

console.log(perfilUsuario)

let robot = {
    nombre: "R2D2",
    material: "metal",
    saludaralobjetorobot:function(){
        return "hola soy " + this.nombre +" y estoy echo de " + this.material +" !!"
    }
}

console.log(robot.saludaralobjetorobot())

let contador = {
    valorActual: 0,
    incrementar:function(){
        this.valorActual = this.valorActual +1 
    },
    decremetnar:function(){
        this.valorActual = this.valorActual -1 
    },
    obtenerValor:function(){
        return this.valorActual

    }
}




console.log(contador.valorActual)
contador.incrementar()
console.log(contador.obtenerValor())
console.log(contador.obtenerValor())

let auto = {
  marca: "Ford",
  modelo: "Mustang",
  año: 1969
};

for (let clave in auto){
    console.log((clave), auto[clave])
}

let computadora = {
  cpu: "Intel i7",
  ram: "16GB",
  disco: "1TB SSD"
};

let claves = Object.keys(computadora)
console.log(claves)



function nombre(clave){
    console.log(clave , computadora[clave])
}
claves.forEach(nombre)

let valores = Object.values(computadora)
console.log(valores)

let entradas = Object.entries(computadora)
console.log(entradas)

let personaje = {
  nombre: "Aragorn",
  raza: "Humano (Dúnedain)",
  clase: "Guerrero / Explorador",
  armaPrincipal: "Andúril"
};

for (let keys in personaje) {
    console.log((keys)+":", personaje[keys])
}

let datosMixtos = {
  a: 10,
  b: "hola",
  c: 25,
  d: true,
  e: 5
};

let valoress = Object.values(datosMixtos);
let suma = 0

function sumanumero(valor){
    if (typeof valor === "number"){
        suma =  suma + valor 
    }
}
valoress.forEach(sumanumero)
console.log(suma)