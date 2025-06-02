  
//   2.1
//              let Mimascota= {
//                 nombre: "Tomas",
//                 especie: "gato",
//                 edad: 3,
//                 juguetasfavoritos:["rascador","peluche"]
//             };
//             console.log(Mimascota)

// 3.1     let libro = {
//         titulo: "Cien Años de Soledad",
//         autor: "Gabriel García Márquez",
//         paginas: 417,
//         "año de publicación": 1967
//         };            

//         console.log(libro.titulo)
//         console.log(libro.autor)
//         console.log(libro["año de publicación"])
//         let propiedaddeseada= "paginas";
//         console.log(libro[propiedaddeseada])

// 4.1     let contacto= {
//             nombre: "juan perez",
//             email:"juan.perez@example.com"
//         };
//         console.log(contacto)
//         contacto["email"] = "jperez.nuevo@mail.com";
//         console.log("email actualizado:", contacto.email);
//         console.log("Objeto inicial:", contacto);
//         contacto.telefono = "555-1234";         
//         console.log("objeto modificado:", contacto)


// 5.1    let perfilUsuario = {
//         idUsuario: "user123",
//         nombreCompleto: "Ana López",
//         direccion: "Calle Falsa 123",
//         ultimoLogin: "2024-05-20T10:00:00Z",
//         preferenciasTema: "claro"
//         };
//         console.log(perfilUsuario)

//         delete perfilUsuario.direccion
//         delete perfilUsuario.ultimoLogin

//         console.log("perfil modificado:" ,perfilUsuario)


// 6.1      let robot={
//             nombre: "r2d2",
//             material: "metal",
//             "saludar al robot": function() {
//                 return "hola soy " + this.nombre + "y estoy hecho de " + this.material;
//             }
//         }
//         console.log(robot["saludar al robot"]()   )
