// Ejercicio 1.1: Seleccionar por ID
// HTML:
// <h1 id="tituloPrincipal">Mi Página Web</h1>
// <p id="parrafoIntro">Bienvenido a mi sitio.</p>
// Tarea en app.js:
// 1-Selecciona el elemento h1 por su ID y guárdalo en una variable llamada titulo.
// 2-Selecciona el elemento p por su ID y guárdalo en una variable llamada parrafo.
// 3-Imprime ambas variables en la consola usando console.log() para verificar que has seleccionado los elementos correctamente.

let titulo = document.getElementById("tituloPrincipal")
let parrafo = document.querySelector("#parrafoIntro")
console.log(titulo,parrafo)

// Ejercicio 1.2: Seleccionar por Selector de CSS
// HTML:
// <div class="contenedor">
//   <p>Primer párrafo.</p>
//   <p class="destacado">Segundo párrafo destacado.</p>
// </div>
// <button id="miBoton">Haz Click</button>


// Tarea en app.js:
// 1-Usa document.querySelector() para seleccionar el elemento con la clase destacado y guárdalo en una variable.
// 2-Usa document.querySelector() para seleccionar el botón por su ID (#miBoton) y guárdalo en otra variable.
// 3-Imprime ambas variables en la consola.
let destacado = document.querySelector("contenedor")
let boton = document.querySelector("#miBoton")
console.log (destacado,boton)

// Ejercicio 1.3: Seleccionar Múltiples Elementos
// HTML:
// <ul>
//   <li class="item-lista">Manzana</li>
//   <li class="item-lista">Banana</li>
//   <li class="item-lista">Naranja</li>
// </ul>


// Tarea en app.js:
// 1-Usa document.querySelectorAll() para seleccionar todos los elementos con la clase item-lista y guárdalos en una variable.
// 2-Imprime la variable en la consola. ¿Qué tipo de objeto es?
// 3-Usa un bucle for para recorrer la lista de elementos que seleccionaste e imprime el texto de cada uno. Pista: Usa elemento.textContent.

let lista2 = document.querySelectorAll("item-lista")
console.log(lista2);
for(let i = 0; i < lista2.length; i++) {
    console.log(lista2[i].textContent);
}

// 2. Modificación de Contenido y Atributos
// Una vez que tienes un elemento, puedes cambiar lo que dice adentro o sus atributos (como href en un enlace o src en una imagen).
// Mini-Documentación:
// *elemento.textContent: Obtiene o establece el contenido de texto de un elemento. Es seguro y rápido.
// *elemento.innerHTML: Obtiene o establece el contenido HTML de un elemento. Permite insertar etiquetas HTML, pero debe usarse con cuidado para evitar vulnerabilidades de seguridad (XSS) si el contenido proviene del usuario.
// *elemento.setAttribute('nombreAtributo', 'valor'): Establece el valor de un atributo.
// *elemento.getAttribute('nombreAtributo'): Obtiene el valor actual de un atributo.
// *elemento.removeAttribute('nombreAtributo'): Elimina un atributo.

// Ejercicio 2.1: Cambiar Texto y Títulos
// HTML:
// <h1 id="titulo">Título Original</h1>
// <p id="subtitulo">Este es el subtítulo original.</p>

// Tarea en app.js:
// Selecciona el h1 y el p.
// Cambia el textContent del h1 a "¡Bienvenido al Mundo del DOM!".
// Cambia el textContent del p a "Ahora estás controlando la página con JavaScript.".

let titulo2 = document.getElementById("titulo");
titulo2.textContent = "¡Bienvenido al Mundo del DOM!";
let subtitulo2 = document.getElementById("subtitulo");
subtitulo2.textContent = "Ahora estás controlando la página con JavaScript.";

// Ejercicio 2.2: Actualizar Atributos de una Imagen
// HTML:
// <img id="imagenPrincipal" src="https://placehold.co/300x200/cccccc/333333?text=Imagen+1" alt="Una imagen de placeholder">

let imagen = document.getElementById("imagenPrincipal").setAttribute("src","https://placehold.co/300x200/5e81ac/ffffff?text=Imagen+2");
document.getElementById("imagenPrincipal").setAttribute("alt","Una nueva imagen dinámica");

// 3. Modificación de Estilos y Clases
// Puedes cambiar la apariencia de un elemento directamente con JavaScript.
// Mini-Documentación:
// *elemento.style.propiedadCSS: Accede y modifica directamente los estilos en línea de un elemento. La propiedad CSS se escribe en camelCase (ej: backgroundColor en lugar de background-color).
// *elemento.classList.add('nombreClase'): Añade una clase CSS al elemento. Esta es la forma recomendada de cambiar estilos.
// *elemento.classList.remove('nombreClase'): Remueve una clase.
// *elemento.classList.toggle('nombreClase'): Añade la clase si no la tiene, y la quita si ya la tiene. ¡Muy útil para interruptores!

// Ejercicio 3.1: Estilos Directos
// HTML:
// <p id="textoCambiante">Este texto cambiará de color.</p>


// Tarea en app.js:
// 1-Selecciona el párrafo por su ID.
// 2-Cambia su color de texto a azul (style.color).
// 3-Cambia su tamaño de fuente a 24px (style.fontSize).
// 4-Cambia su color de fondo a un gris claro (style.backgroundColor).

let texto = document.getElementById("textoCambiante");
texto.style.color = "blue";
texto.style.fontSize = "24px";
texto.style.backgroundColor = "#f0f0f0";

// Ejercicio 3.2: Manipulación de Clases
// HTML y CSS:
// <style>
// .activo {
//     background-color: #88c0d0; /* Un azul claro */
//     color: #2e3440; /* Un gris oscuro */
//     border: 2px solid #5e81ac;
//     padding: 1rem;
//     font-weight: bold;
// }
// </style>
// <div id="miCaja">Este es un div simple.</div>
// <button id="botonActivar">Activar Estilos</button>


// Tarea en app.js:
// 1-Selecciona el div y el button.
// 2-El ejercicio se completará en la sección de Eventos, pero por ahora, simplemente añade la clase activo al div directamente desde tu script para ver cómo funciona.

let caja = document.getElementById("miCaja");
let botonEstilo = document.getElementById("botonActivar");
caja.classList.add("activo");

// 4. Creación y Eliminación de Elementos
// ¡Puedes crear elementos HTML desde cero y añadirlos a tu página!
// Mini-Documentación:
// *document.createElement('nombreEtiqueta'): Crea un nuevo elemento del tipo especificado (ej: 'p', 'li', 'div').
// *elementoPadre.appendChild(elementoHijo): Añade elementoHijo como el último hijo de elementoPadre.
// *elemento.remove(): Elimina el elemento del DOM.

// Ejercicio 4.1: Añadir Elementos a una Lista
// HTML:
// <ul id="listaDinamica">
//   <li>Primer ítem (existente)</li>
// </ul>


// Tarea en app.js:
// 1-Selecciona la lista <ul> por su ID.
// 2-Usa un bucle for que se ejecute 3 veces.
// 3-Dentro del bucle, en cada iteración:
//  a. Crea un nuevo elemento <li> usando createElement.
//  b. Asigna un texto al nuevo <li> (ej: "Nuevo ítem " + (i+1)).
//  c. Añade el nuevo <li> a la lista <ul> usando appendChild.

let lista = document.getElementById("listaDinamica");
for (let i = 0; i < 3; i++) {
let nuevoItem = document.createElement("li");
nuevoItem.textContent = "Nuevo ítem " + (i + 1);
lista.appendChild(nuevoItem);
}

// Ejercicio 4.2: Crear una Tarjeta de Producto
// Tarea: Crea desde cero una "tarjeta" de producto y añádela al <body>. La tarjeta debe ser un <div> que contenga:
// 1-Un <h2> con el nombre del producto (ej: "Teclado Mecánico").
// 2-Un <p> con el precio (ej: "Precio: $150").
// 3-Añade el <h2> y el <p> como hijos del <div>.
// 4-Finalmente, añade el <div> principal al <body> del documento.
// 5-(Opcional) Usa elemento.classList.add() para darle algunos estilos básicos.

let tarjeta = document.createElement("div");
let nombreProducto = document.createElement("h2");
nombreProducto.textContent = "Teclado Mecánico";
let precioProducto = document.createElement("p");
precioProducto.textContent = "Precio: $150";
tarjeta.appendChild(nombreProducto);
tarjeta.appendChild(precioProducto);
tarjeta.classList.add("tarjeta-producto");
document.body.appendChild(tarjeta);

// 5. Manejo de Eventos
// Esta es la clave de la interactividad. Permite que tu código reaccione a acciones del usuario como clics, movimientos del ratón, escritura en un teclado, etc.
// Mini-Documentación:
// elemento.addEventListener('tipoDeEvento', funcionCallback): El método principal.
// tipoDeEvento: Un string que especifica el evento a escuchar (ej: 'click', 'mouseover', 'keydown').
// funcionCallback: La función que se ejecutará cuando ocurra el evento.
// Ejercicio 5.1: Botón de Alerta
// HTML:
// <button id="botonAlerta">¡Hazme Click!</button>


// Tarea en app.js:
// 1-Selecciona el botón.
// 2-Añádele un addEventListener que escuche el evento 'click'.
// 3-Cuando se haga clic, la función callback debe mostrar una alerta (alert()) que diga "¡Hiciste click!".

let botonAlerta = document.getElementById("botonAlerta");
botonAlerta.addEventListener("click", () => {
alert("¡Hiciste click!");
});


// Ejercicio 5.2: Contador de Clics
// HTML:
// <button id="botonContador">Clics: 0</button>

// Tarea en app.js:
// 1-Selecciona el botón.
// 2-Crea una variable contador inicializada en 0.
// 3-Añade un addEventListener para el evento 'click'.
// 4-Dentro del callback:
// a. Incrementa la variable contador.
// b. Actualiza el textContent del botón para que muestre "Clics: [valor del contador]".

let botonContador = document.getElementById("botonContador");
let contador = 0;
botonContador.addEventListener("click", () => {
contador++;
botonContador.textContent = "Clics: " + contador;
});

// Ejercicio 5.3: Completar el Ejercicio de Estilos
// Tarea: Retoma el ejercicio 3.2. Ahora, en lugar de añadir la clase activo directamente, haz que se añada o quite al hacer clic en el botón botonActivar.
// Pista: elemento.classList.toggle() es perfecto para esto.

botonEstilo.addEventListener("click", () => {
caja.classList.toggle("activo");
});

// 6. Ejercicio Final Integrador: Lista de Tareas Simple
// Este ejercicio combina todo lo aprendido.
// HTML:
// <h1>Mi Lista de Tareas</h1>
// <input type="text" id="nuevaTareaInput" placeholder="Añadir nueva tarea">
// <button id="agregarTareaBtn">Agregar</button>
// <ul id="listaTareas">
//   <!-- Las tareas se añadirán aquí -->
// </ul>

// Tarea en app.js:
// 1-Selecciona los elementos: El input de texto, el button de agregar, y la lista <ul>.
// 2-Añadir Tarea: Agrega un addEventListener al botón. Cuando se haga clic:
// a. Obtiene el valor del input (input.value).
// b. Si el valor no está vacío, crea un nuevo <li>.
// c. Asigna el valor del input como textContent del <li>.
// d. Añade el <li> a la lista <ul>.
// e. Limpia el input (asignando '' a su value).
//3-(Opcional - Nivel 1) Marcar como completada: Dentro del addEventListener del botón, cuando crees un nuevo <li>, añádele a ese <li> su propio addEventListener para el evento 'click'. Cuando se haga clic en un <li>, usa classList.toggle('completada') para tacharlo. Necesitarás una clase CSS .completada { text-decoration: line-through; }.
//4-(Opcional - Nivel 2) Añadir botón de eliminar: Dentro del addEventListener del botón "Agregar", además del texto, crea y añade un <button> de "Eliminar" dentro de cada <li>. Añade un addEventListener a este nuevo botón para que, al hacerle clic, elimine su <li> padre (li.remove()).

let inputTarea = document.getElementById("nuevaTareaInput");
let botonAgregar = document.getElementById("agregarTareaBtn");
let listaTareas = document.getElementById("listaTareas");

botonAgregar.addEventListener("click", () => {
    let valor = inputTarea.value.trim();
    if (valor !== "") {
        let li = document.createElement("li");
        li.textContent = valor;

        // Marcar como completada
        li.addEventListener("click", () => {
            li.classList.toggle("completada");
        });

        // Botón de eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginLeft = "1rem";
        btnEliminar.addEventListener("click", (e) => {
            e.stopPropagation(); // evita marcar como completada
            li.remove();
        });

        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
        inputTarea.value = "";
    }
});

