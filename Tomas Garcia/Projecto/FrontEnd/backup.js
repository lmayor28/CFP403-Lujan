document.addEventListener(`DOMContentLoaded`, () => {

    const lista = document.getElementById(`categorias__lista`);
    const editar = document.querySelector(".editar");
    
    let url_api = `http://localhost:8080`
    let obtenerCategorias = () => {
        axios.get(`${url_api}/categorias`)
            .then(response => {
                let categorias = response.data.categorias;
                
                lista.innerHTML = "";

                categorias.forEach(categoria => {
                        let id = categoria.id_categoria;
                        let li = document.createElement(`li`);
                        li.innerHTML = `
                            <p class="categoria"> <span class="negrita">Categoria: </span>${categoria.nombre}</p>
                            <p class="descripcion"> <span class="negrita">Descripcion:</span> ${categoria.descripcion}</p>
                        `
                        lista.appendChild(li);
                });
        }) .catch(error => {
                console.error(`Error al obtener las categorias`, error);
                lista.innerHTML = `<li> error al cargar las categorias </li>`;
        });
    };
                
    obtenerCategorias();
    
});
