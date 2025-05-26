let palabra="Hola Mundo".toUpperCase();  //hace mayuscula el texto
console.log(palabra);

let palabra="Hola Mundo".toLowerCase();  //hace minuscula el texto
console.log(palabra);


let palabra="Hola Mundo";  //
console.log(palabra.substring(0,4)); //selecciona el texto que hay de 0 a 4 osea "hola"

let palabra= "hola mundo";
console.log(palabra.replace("mundo","genio")); //reenplasa a la palabra seleccionada por otra.


let palabra= "hola mundo";
console.log(palabra.indexOf("mundo")); //te dce cuantos numeros hay detras de lo que seleccionaste contando el 0;


let palabra= "hola mundo";
console.log(palabra.trim()); //quita los espcios del principio y del final


let palabra="hola mundo";
let cortado= palabra.slice(0,4);
console.log(cortado);