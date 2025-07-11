let elementos=document.getElementById("tituloPrincipal")
let parrafo=document.querySelector("#parrafoIntro")
let cssselector=document.querySelectorAll
console.log(elementos)
console.log(parrafo)
let destaca= document.querySelector(".destacado")
let boton=document.querySelector("#miBoton")
console.log(destaca)
console.log(boton)
let lista=document.querySelectorAll(".item-lista")
console.log(lista)




for(let i=0; i<3; i++) {
    let elemento=lista[i]
    console.log(elemento.textContent)
}

let titulo=document.getElementById("titulo")
titulo.textContent="¡bienvenido al mundo del DOM!"
console.log(titulo)

let subtitulo=document.querySelector("#subtitulo")
subtitulo.textContent="ahora estas controlando la pagina con javascrip"
console.log(subtitulo)


// 1. 
//  1.1: 

// let titulo = document.getElementById("tituloPrincipal");
// let parrafo = document.getElementById("parrafoIntro")


// console.log(titulo);
// console.log(parrafo);


//  1.2: 

// let destacado = document.querySelector(".destacado");
// let boton = document.querySelector("#miBoton");


// console.log(destacado);
// console.log(boton);

//   1.3: 

// let lista = document.querySelectorAll(`.item-lista`);


// console.log(lista); // es un objeto (NodeList)


// for(let i = 0; i < lista.length; i++) {
//     console.log(lista[i].textContent);
// }

// 2. 
//   2.1: 

// document.getElementById("titulo").textContent = "¡Bienvenido al Mundo del DOM!";
// document.getElementById("subtitulo").textContent = "Ahora estás controlando la página con JavaScript.";



//  2.2: 

// document.getElementById("imagenPrincipal").setAttribute("src","https://placehold.co/300x200/5e81ac/ffffff?text=Imagen+2");
// document.getElementById("imagenPrincipal").setAttribute("alt","Una nueva imagen dinámica");



// 3. 
//   3.1: 

// document.getElementById(`textoCambiante`).style.color = `#00f`;
// document.getElementById(`textoCambiante`).style.fontSize = `24px`;
// document.getElementById(`textoCambiante`).style.backgroundColor = `#ccc`;



//   3.2: 

// document.getElementById(`miCaja`).classList.add(`activo`)
// document.getElementById(`botonActivar`)



//   4. 
//  4.1: 

// let lista = document.getElementById(`listaDinamica`);


// for(let i = 0; i < 3; i++) {
//     let elemento = document.createElement("LI");
//     elemento.textContent = "elemento:" + (i + 1);
//     lista.appendChild(elemento);
// }

//    4.2: 
// let tarjeta = document.createElement("DIV");


// tarjeta.appendChild(document.createElement("H2")).textContent = "Teclado Mecanico Redragon";
// tarjeta.appendChild(document.createElement("P")).textContent = "Precio: 70$";
// tarjeta.classList.add("tarjeta");


// document.querySelector("BODY").appendChild(tarjeta);



//    5.1: 

// document.getElementById(`botonAlerta`).addEventListener("click", () => {
//     alert("Hicste click!")
// });

//    5.2: 

// let boton = document.getElementById(`botonContador`);


// contador = 0;


// boton.addEventListener("click", () => {
//     contador += 1;
//     boton.textContent = `Clics: ${contador}`;
// });

//   5.3: 

// let boton = document.getElementById("botonActivar");
// let caja = document.getElementById("miCaja");
// boton.addEventListener("click", () => {
//     caja.classList.toggle('activo');
// })
