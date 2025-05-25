let salario_anual;
let rendimiento;
let antiguedad;
let objetivos_especiales;
console.log("Vamos a calcular la bonificacion anual. Le pedire que me diga el salario mensual");
salario_anual= 12 * parseFloat(prompt(""));
console.log("digame el rendimiento del empleado: Excelente; Bueno; Regular; Malo.")
rendimiento= prompt("")
switch (rendimiento){
    case "Excelente":
        salario_anual= salario_anual * 1.15;
        break;
    case "Bueno":
        salario_anual= salario_anual * 1.1;
        break;
    case "Regular":
        salario_anual= salario_anual * 1.05;
        break;
    case "Malo":
        break;
      default:
       System.out.println("accion no válida.");
}
console.log("Ahora indica la antiguedad del empleado");
antiguedad= parseFloat( prompt(""));
antiguedad= 1+(antiguedad * 0.01);
salario_anual= salario_anual * antiguedad;
objetivos_especiales = Math.random() > 0.5;
if(objetivos_especiales){
    salario_anual= salario_anual * 1.05;
    console.log("Tuvo objetivos especiales: "+objetivos_especiales)
}else{
    console.log("Tuvo objetivos especiales: "+objetivos_especiales)
}
console.log("Rendimiento: "+rendimiento);
console.log("El salario anual es de : "+salario_anual);

