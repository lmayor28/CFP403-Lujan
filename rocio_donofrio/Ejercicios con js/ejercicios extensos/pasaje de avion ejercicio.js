let precio = 1000000;
let temporada;
let metodo;
let edad;

console.log("Hola señor pasajero aqui le dire el precio de su boleto. Pero primero le pedire su edad");
edad = Number(prompt("Ingrese su edad:"));
if(edad <= 2){
    precio= 0;
}else if(edad >= 65){
    precio= precio /1.2
}
temporada = Math.round(Math.random());
if(temporada == 1){
    precio= precio *1.3
}else{
    precio= precio /1.1
}
console.log("Ingrese su metodo de pago: Tarjeta; Efectivo o Tranferencia.");
metodo= prompt("");
switch(metodo){
    case "Tarjeta":
        precio= precio/1.1;
        break;
    case "Efectivo":
        precio= precio *1.05;
        break;
    case "Transferencia":
        precio= precio /1.05;
        break;
}
if(temporada==1){
    console.log("La temporada es Alta")
}else{
    console.log("La temporada es Baja")
}
console.log("El precio de su viaje es: "+precio)



