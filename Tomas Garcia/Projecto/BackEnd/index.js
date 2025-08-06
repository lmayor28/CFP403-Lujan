let objeto = {auto: "nascar",
             marca: "peugeot",
            combustible : 1
}
let sql = `UPDATE productos SET`;
parametros = []
let i = 0;
for(let prop in objeto){
    parametros.push(objeto[prop]);
    if((i + 1) == Object.keys(objeto).length){
        sql += ` ${prop} = ? `;
    } else {
        sql += ` ${prop} = ?, `;
    }
    i++;
}

sql += `WHERE id_producto = ?`

console.log(Object.keys(objeto).length);


console.log(sql);

