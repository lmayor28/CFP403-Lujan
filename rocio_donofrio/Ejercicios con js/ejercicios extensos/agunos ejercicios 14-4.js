let nacimiento = 2005;
let anioactual= 2025;
let edad;
let morir;
edad = anioactual-nacimiento;
console.log("Tu edad es: "+edad);
if(edad=20){
console.log("A que edad te gustria morir");
    morir=prompt("");
}
if(morir<50){
    console.log("Tan poco creo que tienes razon estupida")
}else{
    console.log("valla tanto que quere hacer ")
}




let edad;
console.log("Ingrese su edad");
edad= Number(prompt(""));
if(edad<=17){
    console.log("usted es Menor de edad")
}else{
    console.log("usted es mayor de edad")
}


let calificacion;
console.log("Introduce tu caificacion");
calificacion= prompt("");
if (calificacion >=90){
    console.log("Tu nota es Excellene yo no lo ubiera hecho mejor")
}else if(calificacion>=70){
        console.log("Tu nota es Buena pero pudo ser mejor")
    }else if(calificacion>=50){
        console.log("Tu calificacion es suficiente pero la verdad mi abuela lo ubiera hecho mejor")
}else{
    console.log("Tu calificacion es insuficiente que haces aqui")
}







let fruta;
console.log("inrese su fruta favorita: Manzana; Naranja; Pomelo; Zandia; Mandarina");
fruta= prompt("")
switch(fruta){
    case "Manzana":
        console.log("Las manzanas son ricas en fibra y antioxidantes. Se dice que una manzana al día mantiene al médico en la lejanía. Vienen en muchas variedades y son excelentes para la digestión.")
        break;
    case "Naranja":
    console.log("Famosa por su alto contenido en vitamina C, la naranja ayuda a fortalecer el sistema inmunológico. También es muy refrescante y perfecto como jugo natural.")
    break;
    case "Pomelo":
    console.log("El pomelo es una fruta cítrica con un sabor agridulce único. Es bajo en calorías y rico en vitamina C y antioxidantes. Ideal para quienes buscan cuidar su salud.")
    break;
    case "Zandia":
    console.log("La sandía es refrescante, jugosa y perfecta para el verano. Tiene un alto contenido de agua (más del 90%) y ayuda a mantenerte hidratado. Además, contiene licopeno, un antioxidante beneficioso.")
    break;
    case "Mandarina":
    console.log("Dulce, fácil de pelar y llena de vitamina C, la mandarina es una de las frutas más prácticas y sabrosas para llevar. También contiene fibra y antioxidantes naturales.")

}





//ARRAYS 14/4
let dia_semana=["Lunes","Martes","Miercoles","Jueves"]
dia_semana.push("viernes");
dia_semana.push("Sabado")
dia_semana.push("Domingo")
console.log(dia_semana)
console.log(dia_semana[0])
console.log(dia_semana[1])
console.log(dia_semana[2])
console.log(dia_semana[3])
console.log(dia_semana[4])
console.log(dia_semana[5])
console.log(dia_semana[6])


//For 14/4

let dia_semana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
for (let i=0; i<7;i++){
    console.log(dia_semana[i])
}