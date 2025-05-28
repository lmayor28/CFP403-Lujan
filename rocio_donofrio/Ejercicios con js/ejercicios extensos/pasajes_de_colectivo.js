let precio_base=500;
let edades = [23, 17, 2, 29, 41, 8, 64, 52, 19, 26, 33, 45, 12, 67, 78, 21, 9, 38, 49, 56, 71, 3, 15, 62, 27, 31, 5, 91, 44, 1,];
let ingreso_total=0;
let contador_ninos=0;
let contador_infantes=0;
let contador_mayores=0;
let contador_regulares=0;
let total=0;
for(let i=0; i < edades.length; i++){
    if(edades[i]<=2){
        ingreso_total= ingreso_total+precio_base*0.1;
        contador_infantes += 1;
        total= total + 1;
    }else if(edades[i]>2 && edades[i]<=12){
        ingreso_total= ingreso_total+precio_base*0.6;
        contador_ninos += 1;
        total= total + 1;
    }else if(edades[i]>=65){
        ingreso_total= ingreso_total+precio_base*0.4;
        contador_mayores += 1;
        total= total + 1;
    }else{
        ingreso_total= ingreso_total+precio_base;
        contador_regulares += 1;
        total= total += 1;
    }
}
    console.log("clases de Pasajeros, Total de Pasajeros y total de ingresos del dia");
    console.log("Pasajeros infantes: "+ contador_infantes);
    console.log("Pasajeros niños: "+ contador_ninos);
    console.log("Pasajeros Mayores: "+ contador_mayores);
    console.log("Pasajeros regulares: "+ contador_regulares);
    console.log("Total de Pasajeros: "+ total);
    console.log("Total de Ingresos: "+ ingreso_total);
    