document.addEventListener(`DOMContentLoaded`, () => {

    const lista = document.getElementById(`categorias__lista`);
    const lapiz = document.querySelector(".lapiz")
    console.log(lapiz);
    
    let obtenerCategorias = () => {
        axios.get(`http://localhost:8080/categorias`)
            .then(response => {
                let categorias = response.data.categorias;
                console.log(categorias);
                
                lista.innerHTML = "";

                categorias.forEach(categoria => {
                    let li = document.createElement(`li`);
                    li.classList
                    li.innerHTML = `
                        <p class="categoria"> <span class="negrita">Categoria: </span>${categoria.nombre}</p>
                        <p class="descripcion"> <span class="negrita">Descripcion:</span> ${categoria.descripcion}</p>
                    `;
                    lista.appendChild(li);
                });
            })
            .catch(error => {
                console.error(`Error al obtener las categorias`, error);
                lista.innerHTML = `<li> error al cargar las categorias </li>`;
            });
    };
    obtenerCategorias();

    lapiz.addEventListener(`click`, () => {
        let EditarCategorias = () => {
            axios.get(`http://localhost:8080/categorias`)
            .then(response => {
                let categorias = response.data.categorias;
                
                lista.innerHTML = "";

                categorias.forEach(categoria => {
                    let li = document.createElement(`li`);
                    li.innerHTML = ``;
                    li.innerHTML = `
                        <p class="categoria"> <span class="negrita">Categoria: </span>${categoria.nombre}</p>
                        <p class="descripcion"> <span class="negrita">Descripcion:</span> ${categoria.descripcion}</p>
                        <button class="boton-editar">Editar</button>
                    `;
                    lista.appendChild(li);
                });
            })
            .catch(error => {
                console.error(`Error al obtener las categorias`, error);
                lista.innerHTML = `<li> error al cargar las categorias </li>`;
            });
        }
        EditarCategorias();
    })
});
