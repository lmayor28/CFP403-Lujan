// Ejercicio 1:
let nombre = "Rocio";
console.log(nombre);

// Ejercicio 2:
let edad = 19;
console.log(edad);

// Ejercicio 3:
let estudiante = true;
console.log(estudiante);

// Ejercicio 4:
let A = 10;
let B = 5;
let sum;
sum = A + B;
let rest;
rest = A - B;
let M;
M = A * B;
let D;
D = B / A;
console.log(sum);
console.log(rest);
console.log(M);
console.log(D);

// Ejercicio 5:
let saludo = "hola";
let usuario = "mundo";
let mensaje = `${saludo} ${usuario}`;
console.log(mensaje);

// Ejercicio 6:
let A;
console.log(A);
console.log(typeof A);

// Ejercicio 7:
let A = null;
console.log(A);
console.log(typeof A);

// Ejercicio 8:
let n1 = 10;
let contador = 0;
contador += n1;
contador += n1;
contador += n1;
console.log(contador);

// Ejercicio 9:
comp = 5 == "5";
gg = 5 === "5";
console.log(comp);
console.log(gg);

// Ejercicio 10:
let A = true;
let B = false;
console.log(A && B);
console.log(A || B);

// Ejercicio 11:
let c = true;
console.log(!c);

// Ejercicio 12:
let numero = 66;
if (numero > 0) {
    console.log("si es positivoi")
}

// Ejercicio 13:
let numero = 66;
if (numero > 0) {
    console.log("si es positivo i")
} else {
    console.log("no es positivo ")
}

// Ejercicio 14:
let numero = 66;
if (numero > 0) {
    console.log("si es positivo");
} else if (numero = 0) {
    console.log("es cero");
} else {
    console.log("no es positivo");
};

// Ejercicio 15:
let semaforo = ["rojo", "amarillo", "verde"];
switch (semaforo) {
    case "rojo":
        console.log("Detente");
        break;
    case "amarillo":
        console.log("precaucion");
        break;
    case "verde":
        console.log("avanza");
        break;
    default:
        console.log("Color no válido");
};

// Ejercicio 16:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ejercicio 17:
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Ejercicio 18:
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Ejercicio 19:
let frutas = ["manzana", "banana", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Ejercicio 20:
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

// Ejercicio 21:
    function saludar(){
    console.log("hola a todos");
}


console.log(saludar());
// Ejercicio 22:
    function saludar(nombre ="Rocio"){
    console.log(`Hola, ${nombre}`);
}

console.log(saludar());
// Ejercicio 23:
function sumar(a,b){
    return a+b;
}
console.log(sumar(7,8));

// Ejercicio 24:
let arrow=(a,b) =>{
     return a+b;
    }

// Ejercicio 25:
function enexistente(){
 
}

console.log(enexistente());
undefined
// Ejercicio 26:
let frutas=["manzana","pera","frutilla"]
// Ejercicio 27:
let frutas=["manzana","pera","frutilla"]
console.log(frutas);
// Ejercicio 28:
let frutas=["manzana","pera","frutilla"]
console.log(frutas[0]);
// Ejercicio 29:
let frutas=["manzana","pera","frutilla"]

console.log(frutas[frutas.length-1]);
// Ejercicio 30:
let frutas=["manzana","pera","frutilla"]
frutas.push("naranja");
console.log(frutas);
// Ejercicio 31:
let frutas=["manzana","pera","frutilla"]
frutas.pop();
console.log(frutas);
// Ejercicio 32:
let frutas=["manzana","pera","frutilla"]
for(let i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}
// Ejercicio 33:
const persona={
    nombre:"Hugo Rocha",
    edad:40,
    ciudad:"Lujan"
};
// Ejercicio 34:
const persona={
    nombre:"Hugo Mendez",
    edad:40,
    ciudad:"Lujan"
};

console.log(persona);
// Ejercicio 35:
const persona={
    nombre:"Hugo Mendez",
    edad:40,
    ciudad:"Lujan"
};

console.log(persona.nombre);
// Ejercicio 36:
