
document.addEventListener(`DOMContentLoaded`, () => {
    obtenerProductos();
    ModalEditarProducto();
    obtenerCategorias();
});

    let url_api = `http://localhost:8080`
    let obtenerProductos = () => {
        axios.get(`${url_api}/productos`)
            .then(response => {
                let productos = response.data.productos

                // seleccionamos la seccion productos y la tabla
                const seccionProductos = document.getElementById("productos")
                const tabla = document.getElementById("tabla__productos");

                // TBODY
                const tbody = document.createElement("tbody");

                productos.forEach(producto => {
                    const fila = document.createElement("tr");
                    // valores
                    const valores = [
                        producto.id_producto,
                        producto.nombre_categoria,
                        producto.id_subcategoria,
                        producto.nombre,
                        producto.descripcion,
                        producto.color,
                        producto.material,
                        producto.destacado,
                        producto.stock_total,
                        producto.precio
                    ];
                    valores.forEach((valor,index) => {
                        const td = document.createElement("td");
                        if( index === valores.length - 1){
                            td.classList.add("precio")
                            td.textContent = `${valor} `
                            td.innerHTML += `<span>$</span>`
                        }  else {
                            td.textContent = valor;
                        }
                        fila.appendChild(td);
                    });
                    const botonEditar = document.createElement("button");
                    botonEditar.id = "botonEditar";
                    botonEditar.textContent = "Editar";
                    botonEditar.value = producto.id_producto;
                    const botonEliminar = document.createElement("button");
                    botonEliminar.id = "botonEliminar";
                    botonEliminar.textContent = "Eliminar"
                    botonEliminar.value = producto.id_producto
                    const td = document.createElement("td");
                    td.appendChild(botonEditar);
                    td.appendChild(botonEliminar);
                    fila.appendChild(td)

                    tbody.appendChild(fila);

                    botonEditar.addEventListener("click", () => {
                        document.getElementById("modalEditar").style.display = "flex";

                        // ponelos los campos input con los valores que ya tiene el producto
                        document.getElementById("inputId").value = producto.id_producto;
                        document.getElementById("inputNombre").value = producto.nombre;
                        document.getElementById("inputDescripcion").value = producto.descripcion;
                        document.getElementById("inputColor").value = producto.color;
                        document.getElementById("inputMaterial").value = producto.material;
                        document.getElementById("inputDestacado").value = producto.destacado;
                        document.getElementById("inputStock").value = producto.stock_total;
                        document.getElementById("inputPrecio").value = producto.precio;
                    });
                    
                    botonEliminar.addEventListener("click", () => {
                        axios.delete(`${url_api}/admin/productos/${botonEliminar.value}`)
                            .then(response => {
                                alert(response.data.message);
                                location.reload();
                            })
                    })
                });
                // Unimos todo
                tabla.appendChild(tbody);
                seccionProductos.appendChild(tabla)
            })
    }

    let ModalEditarProducto = () => {
        const formEditar = document.getElementById("formEditar");
        formEditar.addEventListener("submit", (e) => {
            e.preventDefault();

            const datos = {
                nombre: document.getElementById("inputNombre").value,
                descripcion: document.getElementById("inputDescripcion").value,
                color: document.getElementById("inputColor").value,
                material: document.getElementById("inputMaterial").value,
                destacado: document.getElementById("inputDestacado").value,
                stock_total: document.getElementById("inputStock").value,
                precio: document.getElementById("inputPrecio").value,
            };

            const id = document.getElementById("inputId").value;

            axios.put(`${url_api}/admin/productos/${id}`, datos)
                .then(response => {
                    alert("Producto actualizado correctamente");
                    document.getElementById("modalEditar").style.display = "none";
                    location.reload();
                })
                .catch(err => console.error(err));
        });

        // --- Cerrar modal ---
        document.getElementById("cerrarModal").addEventListener("click", () => {
            document.getElementById("modalEditar").style.display = "none";
        });
    }

    let obtenerCategorias = () => {
        axios.get(`${url_api}/categorias`)
            .then(response => {
                let categorias = response.data.categorias;
                let categorias__lista = document.getElementById("categorias__lista");
                let categorias_producto = document.getElementById("producto_categoria");
                
                categorias.forEach((categoria,index) => {
                    // muestro categorias
                    let li = document.createElement("li");
                    let separacion = document.createElement("div");
                    separacion.classList.add("separacion")
                    li.innerHTML = `
                        <p><span class="negrita">Categoria:</span> ${categoria.nombre} <span class="negrita">Descripcion:</span> ${categoria.descripcion} </p>
                    `
                    obtenerSubCategorias(categoria[index])
                    li.appendChild(separacion);
                    categorias__lista.appendChild(li);

                    // Seleccionar categorias donde cargo los productos
                    let option = document.createElement("option");
                    option.value = categoria.id_categoria;
                    option.textContent = categoria.nombre;
                    categorias_producto.appendChild(option)
                })
                // cuando selecciono una categoria, cargo subcategorías
                    categorias_producto.addEventListener("change", (e) => {
                        let idCategoria = e.target.value;
                        obtenerSubCategorias(idCategoria);
                    });
            })
    }

    let obtenerSubCategorias = (idCategoria) => {
        axios.get(`${url_api}/subcategorias/${idCategoria}`)
            .then(response => {
                let subcategorias = response.data.subcategorias;
                let selectSub = document.getElementById("form__subCategorias");

                selectSub.innerHTML = "";

                if (subcategorias.length === 0) {
                    let opt = document.createElement("option");
                    opt.value = "";
                    opt.textContent = "No hay subcategorías";
                    selectSub.appendChild(opt);
                } else {
                    subcategorias.forEach(sub => {
                        let SinCategoria = document.createElement("option");
                        SinCategoria.value = null;
                        SinCategoria.textContent = "--Elegir Subcategoria--";
                        let option = document.createElement("option");
                        option.value = sub.id_subcategoria;
                        option.textContent = sub.nombre;
                        selectSub.appendChild(SinCategoria)
                        selectSub.appendChild(option);
                    });
                }
            })
            .catch(err => {
                let selectSub = document.getElementById("form__subCategorias");
                selectSub.innerHTML = "";
                let opt = document.createElement("option");
                opt.value = "";
                opt.textContent = "No hay subcategorías";
                selectSub.appendChild(opt);
        });
    }

    document.getElementById("formProductos").addEventListener("submit", (e) => {
        e.preventDefault();

        let subcat = document.getElementById("form__subCategorias").value;

        let producto = {
            nombre: document.getElementById("nombre").value,
            descripcion: document.getElementById("descripcion").value,
            precio: document.getElementById("precio").value,
            color: document.getElementById("color").value,
            material: document.getElementById("material").value,
            stock_total: document.getElementById("stock_total").value,
            destacado: document.getElementById("destacado").value,
            id_categoria: document.getElementById("producto_categoria").value,
            id_subcategoria: subcat === "" ? null : subcat   // ✅ si elige "sin subcategoría" → null
        };

        axios.post(`${url_api}/admin/productos`, producto)
            .then(res => {
                alert("✅ Producto creado: " + res.data.producto.nombre);
                document.getElementById("formProductos").reset();
            })
            .catch(err => {
                alert("❌ Error al crear el producto");
                console.error(err.response ? err.response.data : err);
            });
    });

    // cargar imagen

    document.getElementById("formImagenes").addEventListener("submit", function(e){
        e.preventDefault();

        let formData = new FormData(this);

        axios.post(`${url_api}/admin/imagenes`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(function(response) {
            console.log("Respuesta del servidor:", response.data);
            alert("Imagen subida con éxito!");
        })
        .catch(function(error) {
            console.error("Error al subir la imagen:", error);
            alert("Hubo un error al subir la imagen");
        });
    });


