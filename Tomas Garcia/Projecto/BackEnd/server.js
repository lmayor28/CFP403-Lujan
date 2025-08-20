let express = require("express");
let sqlite3 = require("sqlite3");
const cors = require('cors');
const multer = require("multer");
const path = require("path");
let app = express();
let puerto = 8080;

app.use(cors());
app.use(express.json());


// Servir la carpeta uploads con ruta absoluta

app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));


//  Configuración de Multer
const uploadsDir = path.join(__dirname, "uploads");

// Crear carpeta si no existe
const fs = require("fs");
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

let bd = new sqlite3.Database(".overman.db", err => {
    if(err) console.error(`No se pudo conectar a la base de datos error: ${err.message}`);
    else {
        console.log(`Se conecto a la base de datos`);
        bd.run(`CREATE TABLE IF NOT EXISTS categorias (
                id_categoria INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                descripcion TEXT NOT NULL
            )`, (err) => {
                if(err)  {
                    console.error(`Error al crear tabla de Categorias: ${err.message}`)
                } else {
                    console.log(`Tabla "categorias" creada`);
                }
            });

        bd.run(`CREATE TABLE IF NOT EXISTS subcategoria (
                id_subcategoria INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                descripcion TEXT NOT NULL,
                id_categoria INTEGER NOT NULL,
                FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria)
            )`, (err) => {
                if(err)  {
                    console.error(`Error al crear tabla de SubCategorias: ${err.message}`)
                } else {
                    console.log(`Tabla "SubCategorias" creada`);
                    
                }
            }); 

        bd.run(`CREATE TABLE IF NOT EXISTS productos (
                id_producto INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                descripcion TEXT NOT NULL,
                precio REAL NOT NULL,
                color TEXT NOT NULL,
                material TEXT NOT NULL,
                stock_total INTEGER NOT NULL,
                destacado BOOLEAN DEFAULT 0,
                id_categoria INTEGER NOT NULL,
                id_subcategoria INTEGER,
                FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
                FOREIGN KEY (id_subcategoria) REFERENCES subcategoria (id_subcategoria)
            )`, (err) => {
                if(err)  {
                    console.error(`Error al crear tabla de Productos: ${err.message}`)
                } else {
                    console.log(`Tabla "Productos" creada`);
                    
                }
            });

        bd.run(`CREATE TABLE IF NOT EXISTS imagenes (
                id_imagen INTEGER PRIMARY KEY AUTOINCREMENT,
                imagen_url TEXT NOT NULL,
                id_producto INTEGER NOT NULL,
                FOREIGN KEY (id_producto) REFERENCES productos (id_producto)
            )`, (err) => {
                if(err) {
                    console.error(`Error al crear tabla de Imagenes: ${err.message}`);
                } else {
                    console.log(`tabla de "Imagenes" creada`);
                }
            });

        bd.run(`CREATE TABLE IF NOT EXISTS talles (
                id_talle INTEGER PRIMARY KEY AUTOINCREMENT,
                id_producto INTEGER NOT NULL,
                talle TEXT NOT NULL,
                stock INTEGER NOT NULL,
                FOREIGN KEY (id_producto) REFERENCES productos (id_producto)
            )`, (err) => {
                if(err)  {
                    console.error(`Error al crear tabla de tallas: ${err.message}`)
                } else {
                    console.log(`Tabla "tallas" creada`);
                }
            });
    }
});

app.get(`/`, (req,res) => {
    res.send(`Bienvenido a la api de Overmand_IND con Express!`)
});

// RUTAS CATEGORIAS --------------------------------------------------------------------------------------------------
app.post("/admin/categorias", (req,res) => {
    let { nombre, descripcion} = req.body;
    
    if(!nombre || descripcion === undefined) {
       return res.status(400).console.json({error: `Nombre y Descripcion son obligatorios.` });
    }

    let sql = `INSERT INTO categorias (nombre,descripcion) VALUES (?,?)`;
    bd.run(sql,[nombre,descripcion],function(err) {
        if(err) return res.status(500).json({error: err.message});
        res.status(201).json({
            message: `categoria creada exitosamente`,
            categoria: {id: this.lastID, nombre, descripcion}
        });
    });
});

app.get(`/categorias`, (req,res) => {
    let sql = `SELECT * FROM categorias`;
    bd.all(sql,[],(err, rows) => {
        if(err) return res.status(500).json({ error: err.message});
        res.status(200).json({categorias: rows})
    })
});

app.put(`/admin/categorias/:id`, (req,res) => {
    let id = req.params.id;
    let {nombre, descripcion} = req.body;

    if( !nombre || descripcion === undefined) {
        return res.status(400).json({error: `el nombre y descripcion son obligatorios`});
    }

    let sql = `UPDATE categorias SET nombre = ?, descripcion = ? WHERE id_categoria = ?`;
    bd.run(sql,[nombre,descripcion,id], function(err) {
        if(err) return res.status(500).json({error: err.message});
        if( this.changes > 0){
            res.status(200).json({
                message: `categoria con id: ${id} actualizado`,
                categoria: {id: Number(id), nombre, descripcion}
            });
        };
    });
});

app.delete(`/admin/categorias/:id`, (req,res) => {
    let id = req.params.id;
    let sql = `DELETE FROM categorias WHERE id_categoria = ?`;
    bd.run(sql,[id],function(err) {
        if(err) return res.status(400).json({error: err.message});
        if(this.changes > 0) {
            res.status(200).json({
            message: `Categoria con el id ${id} eliminada`
        });
        } else {
            res.status(404).json({message: `Categoria con id ${id} no encontrada`})
        }
    });
});

// RUTAS PRODUCTOS ------------------------------------------------------------------------------

app.post(`/admin/productos`, (req,res) => {
    let {nombre, descripcion, precio, color, material, stock_total, destacado, id_categoria, id_subcategoria} = req.body;
    
    if( !nombre || !descripcion || !precio || !color || !stock_total || !id_categoria) {
        return res.status(400).json({error: `por favor ingrese todos los datos` });
    }

    // ✅ Si no se selecciona, guardamos null
    if (!id_subcategoria || id_subcategoria === "") {
        id_subcategoria = null;
    }

    let sql = `INSERT INTO productos 
        (nombre, descripcion, precio, color, material, stock_total, destacado, id_categoria, id_subcategoria) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    bd.run(sql, [nombre, descripcion, precio, color, material, stock_total, destacado, id_categoria, id_subcategoria], function(err) {
        if(err) return res.status(500).json({error : err.message});
        res.status(201).json({
            message: "Producto creado exitosamente",
            producto: {id: this.lastID, nombre, descripcion, precio}
        });
    });
});



app.get(`/productos`, (req,res) => {
    let sql = `SELECT productos.id_producto, categorias.nombre as nombre_categoria, productos.id_subcategoria,productos.nombre,productos.descripcion,productos.color,productos.material,productos.destacado,productos.stock_total,productos.precio FROM productos INNER JOIN categorias ON productos.id_categoria = categorias.id_categoria;`;
    bd.all(sql,[], (err,rows) => {
        if(err) return res.status(500).json({error: err.message});
        res.status(200).json({productos: rows});
    });
})

app.get(`/productos/:id`, (req,res) => {
    let {id} = req.params;
    let sql = `SELECT * FROM productos WHERE id_producto = ?`;
    bd.get(sql,[id],(err,row) => {
        if(err) return res.status(500).json({error : err.message});
        if(row) {
            res.status(200).json({producto : row})
        } else {
            res.status(404).json({message : `el producto con el id: ${id} no se encuentra registrado`})
        }
    })
})

app.put(`/admin/productos/:id`, (req,res) => {
    let {id} = req.params;
    let datos = req.body;
    let parametros = [];
    let sql = `UPDATE productos SET`;
    let i = 0;
    
    for(let prop in datos) {
        parametros.push(datos[prop]);
        if((i + 1) == Object.keys(datos).length){
            sql += ` ${prop} = ? WHERE id_producto = ?`;
        } else {
            sql += ` ${prop} = ?, `;
        }
        i++;
    }
    parametros.push(id);
    
    bd.run(sql,parametros, function(err){
        if(err) return res.status(400).json({error: err.message});
        if(this.changes > 0){
            res.status(200).json({
                message: `Producto actualizado`,
            });
        } else {
            res.status(404).json({message : `el producto con el id: ${id} no se encuentra registrado`})
        }
    });
})

app.delete(`/admin/productos/:id`, (req,res) => {
    let id = req.params.id;
    let sql = `DELETE FROM productos WHERE id_producto = ?`;
    bd.run(sql,[id], function(err){
        if(err) return res.status(400).json({error: err.message});
        if(this.changes > 0){
            res.status(200).json({
                message: `Producto Eliminado`
            });
        } else {
            res.status(404).json({
                message: "producto con id no encontrado"
            })
        }
    });
});

app.get("/productosCompletos", (req, res) => {
    let sql = `
        SELECT p.id_producto, p.nombre, p.descripcion, p.precio, p.color, p.material, p.stock_total, p.destacado, c.nombre AS categoria, s.nombre AS subcategoria, i.imagen_url
        FROM productos p
        INNER JOIN categorias c ON p.id_categoria = c.id_categoria
        LEFT JOIN subcategoria s ON p.id_subcategoria = s.id_subcategoria
        LEFT JOIN imagenes i ON p.id_producto = i.id_producto
    `;

    bd.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });

        // Agrupar imágenes por producto
        let productos = {};
        rows.forEach(row => {
            if (!productos[row.id_producto]) {
                productos[row.id_producto] = {
                    id_producto: row.id_producto,
                    nombre: row.nombre,
                    descripcion: row.descripcion,
                    precio: row.precio,
                    color: row.color,
                    material: row.material,
                    stock_total: row.stock_total,
                    destacado: row.destacado,
                    categoria: row.categoria,
                    subcategoria: row.subcategoria,
                    imagenes: []
                };
            }
            if (row.imagen_url) {
                productos[row.id_producto].imagenes.push(`/uploads/${row.imagen_url}`);  
            }
        });

        res.status(200).json({ productos: Object.values(productos) });
    });
});


app.listen(puerto,() => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});



app.post(`/admin/subcategorias`, (req,res) => {
    let {nombre, descripcion, id_categoria} = req.body;

    if(!nombre,!descripcion,!id_categoria === undefined){
        return res.status(400).json({error: `por favor ingrese todos los datos` });
    }

    let sql = `INSERT INTO subcategoria (nombre,descripcion,id_categoria) VALUES (?,?,?)`;
    bd.run(sql,[nombre,descripcion,id_categoria], function(err) {
        if(err) res.status(500).json({error : err.message});
        res.status(201).json({
            message : "subcategoria creada con exito",
            
        });
    })

})

app.get(`/subcategorias/:id`, (req, res) => {
    let { id } = req.params;   // ✅ así se extrae el parámetro de la URL

    let sql = `SELECT * FROM subcategoria WHERE id_categoria = ?`;

    bd.all(sql, [id], (err, rows) => {   // ✅ uso .all para traer varias filas
        if (err) return res.status(500).json({ error: err.message });

        if (rows.length > 0) {
            res.status(200).json({ subcategorias: rows });
        } else {
            res.status(404).json({ message: `No hay subcategorías registradas para la categoría ${id}` });
        }
    });
});

app.post("/admin/imagenes", upload.single("imagen"), (req, res) => {
    let { id_producto } = req.body;

    if (!id_producto) {
        return res.status(400).json({ error: "Debe indicar el ID del producto" });
    }

    if (!req.file) {
        return res.status(400).json({ error: "Debe subir una imagen" });
    }

    let sqlImg = `INSERT INTO imagenes (imagen_url, id_producto) VALUES (?, ?)`;
    bd.run(sqlImg, [req.file.filename, id_producto], function(err) {
        if (err) {
            console.error("Error SQL:", err.message);
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: "Imagen subida exitosamente",
            id_imagen: this.lastID,
            id_producto,
            imagen_url: `/uploads/${req.file.filename}`
        });
    });
});

app.get("/test-imagen", (req, res) => {
    res.sendFile(path.join(__dirname, "uploads", "1755698053434.png"));
});