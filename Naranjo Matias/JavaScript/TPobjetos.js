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