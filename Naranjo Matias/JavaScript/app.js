let titulo= document.getElementById('tituloPrincipal');
let parrafo= document.getElementById('parrafoPrincipal')

console.log(titulo)
console.log(parrafo)

let parrafoDestacado  = document.querySelector('.destacado');
let boton = document.querySelector('#miBoton');

console.log(parrafoDestacado);
console.log(boton);

let items = document.querySelectorAll('.item-lista')
console.log(typeof items)

for (let i = 0; i< items.length; i++) {
    console.log(items[i].textContent)
}

let titulo1 = document.getElementById('titulo')
let subtitulo = document.getElementById('subtitulo')

titulo1.textContent = "¡Bienvenido al Mundo del DOM!"
subtitulo.textContent =  "Ahora estás controlando la página con JavaScript."

let imagen = document.getElementById('imagenPrincipal')

imagen.setAttribute('src','https://placehold.co/300x200/5e81ac/ffffff?text=Imagen+2')
imagen.setAttribute('alt','Una nueva imagen dinamica')

let texto = document.getElementById('textoCambiante')

texto.style.color = 'blue'
texto.style.fontSize = '24px'
texto.style.backgroundColor = 'lightgrey';

let miCaja = document.getElementById('miCaja')
let botonActivar = document.getElementById('botonActivar')

miCaja.classList.add('activo')



let lista = document.getElementById('listaDinamica')

for (let i=0; i<3;i++) {
   let nuevoItem = document.createElement('li');
   nuevoItem.textContent = 'nuevoItem ' + (i + 1);
   lista.appendChild(nuevoItem)

}


let tarjeta = document.createElement('div')
let h2 = document.createElement('h2')
let p = document.createElement('p')
h2.textContent = 'Teclado Mecanico'
p.textContent = 'Precio $150'
tarjeta.appendChild(h2)
tarjeta.appendChild(p)
document.body.appendChild(tarjeta)

let botonAlerta = document.getElementById('botonAlerta')

botonAlerta.addEventListener('click', () => {
  alert('¡Hiciste click!');
});

let botonContador = document.getElementById('botonContador')

let contador = 0 

botonContador.addEventListener('click', () => {
  contador ++
  botonContador.textContent = 'Clics: ' + contador
});

const botonEstilo = document.getElementById('botonActivar');
botonEstilo.addEventListener('click', () => {
      miCaja.classList.toggle('activo');

      
      if (miCaja.classList.contains('activo')) {
        botonEstilo.textContent = 'Desactivar estilo';
      } else {
        botonEstilo.textContent = 'Activar estilo';
      }
    });
