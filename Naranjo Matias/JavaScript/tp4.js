

let sistema_gestion = {
    tareas : [],
    agregarTarea:function(tarea){
        this.tareas.push(tarea)

    },
    
    marcar_tarea_fin:function(nombre){
        for (let i = 0; i < this.tareas.length; i++){
             if (this.tareas[i].nombre === nombre) {
                this.tareas[i].estado = false
        }
       }
    },

    listar_tarea_pendientes:function(){
        let pendientes = [];
        for(let i = 0; i < this.tareas.length; i++){
            if (this.tareas[i].estado === false) {
            pendientes.push(this.tareas[i]);
        }
    }
    return pendientes;
}
};





// console.log(sistema_gestion.tareas)

let Tarea2 = {
    descripcion:"estudiar",
    estado:false,
    nombre: "tarea2"
}
let Tarea3 = {
    descripcion:"cortar pasto",
    estado:false,
    nombre: "tarea3"
}

let Tarea4 = {
    descripcion:"pintar la cerca",
    estado:true,
    nombre: "tarea4"
}

sistema_gestion.agregarTarea(Tarea2)
sistema_gestion.agregarTarea(Tarea3)

// console.log(sistema_gestion.tareas)
console.log(sistema_gestion.listar_tarea_pendientes())   
