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