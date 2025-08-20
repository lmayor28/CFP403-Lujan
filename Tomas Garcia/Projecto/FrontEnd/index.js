document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:8080/productosCompletos")
        .then(res => {
            const productos = res.data.productos;
            const grid = document.getElementById("productosGrid");
            grid.innerHTML = "";

            productos.forEach(producto => {
                const carouselId = `carousel-${producto.id_producto}`;

                // Carousel con imágenes
                const imagenesHTML = producto.imagenes && producto.imagenes.length > 0
                    ? producto.imagenes.map((img, i) => `
                        <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img src="http://localhost:8080${img}" class="d-block w-100" alt="Imagen de ${producto.nombre}">
                        </div>
                      `).join("")
                    : `<div class="carousel-item active">
                           <img src="/src/img/no-image.png" class="d-block w-100" alt="Sin imagen">
                       </div>`;

                // Card con datos del producto
                const productoHTML = `
                    <div class="card shadow-sm">
                        <!-- Carousel -->
                        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${imagenesHTML}
                            </div>
                            ${producto.imagenes && producto.imagenes.length > 1 ? `
                            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>` : ""}
                        </div>

                        <!-- Info -->
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p><strong>Precio:</strong> $${producto.precio}</p>
                            <p><strong>Color:</strong> ${producto.color} | <strong>Material:</strong> ${producto.material}</p>
                            <p><strong>Stock:</strong> ${producto.stock_total}</p>
                            <p>
                                <span class="badge bg-dark">${producto.categoria}</span> 
                                ${producto.subcategoria ? `<span class="badge bg-secondary">${producto.subcategoria}</span>` : ""}
                            </p>
                        </div>
                    </div>
                `;

                grid.innerHTML += productoHTML;
            });
        })
        .catch(err => {
            console.error("Error cargando productos:", err);
            const grid = document.getElementById("productosGrid");
            if (grid) grid.innerHTML = `<p class="text-danger">No se pudieron cargar los productos</p>`;
        });
});