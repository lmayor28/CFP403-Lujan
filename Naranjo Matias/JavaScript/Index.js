 // console.log ("Hola Mundo") 

let nombre = "matias"
console.log(nombre)

let edad = "52"
console.log(edad)

let esEstudiante = true
console.log(esEstudiante)

let num1 = 1
let num2 = 2
let suma = (num1+num2)
let resta = (num1-num2)
let multiplic = (num1*num2)
let div = (num1/num2)
console.log(suma,resta,multiplic,div)

let saludo = "Hola"
let usuario = "Mundo"
let mensaje = `${saludo} ${usuario}` 
console.log(mensaje)

let variable 
console.log(variable)
console.log(typeof variable)

let mivariable = null
console.log(mivariable)
console.log(typeof mivariable)

let contador = (10)
let cont = (5)
contador += cont
console.log(contador)

let numer = 5
let numero = "5"

console.log(numer==numero)
console.log(numer===numero)

let a = true
let b = false 

console.log(a&&b,a||b )

let c = true
console.log(c)
console.log(!c)

let d = 3

if (d>0) {console.log("numero positivo")

} else if (d==0) {console.log("numero es cero")

} else { console.log("numero es negativo")}


let semaforo = "verde"

switch (semaforo) {
   
    case "rojo":
        console.log("detente")
    break

    case "amarillo":
        console.log("precaucion")
    break

    case "verde":
        console.log("avanza")
    break
}


for (let i = 1; i <= 10; i++) {
    console.log(i)
  }

  let i = 1

while (i <= 10) {
  console.log(i)
  i++
}

for(let i = 0 ; i <= 20; i++) {
    console.log(i)

}

let frutas = ["manzana", "banana", "naranja", "uva"]

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
  }

function saludar(nombre){
    console.log("hola ", nombre)
}

saludar("matias")
saludar("luis")

function sumar(a , b){
    return a + b 
}
   let resultado = sumar(2,3)

   console.log(resultado)

const sumando = (a, b) => a + b

   let valor  = sumar(5, 3)
   console.log(valor)

function multiplicacion(A , b) {
    
}
let nada = multiplicacion(2,3)

console.log(nada)

let fruits = ["manzana" , "banana" , "mandarina", "frutilla", "naranja", "ciruela" , "kiwi", "pera" , "higo"  ]

console.log(fruits)

console.log(fruits[0])

console.log(fruits[fruits.length - 1])

fruits.push("durazno")

console.log(fruits)

fruits.pop()

console.log(fruits)

for (let i = 0 ; i < fruits.length; i++) {
    console.log(fruits[i]);
  }


  let persona = {
    nombre :"matias",
    edad :39,
    ciudad : "lujan"
  }

  console.log(persona)

  console.log(persona.nombre)
//ejercicios de clase 23/5
  let palabra = ("hola mundo")
  console.log(palabra.length,palabra)

  console.log(palabra.toUpperCase())
  console.log(palabra.toLowerCase())
  let = sub_palabra = palabra.substring(0,4)
  console.log(sub_palabra)

  console.log(palabra.indexOf("mundo"))

  let frase = palabra.replace("hola", "Chau ")
  console.log(frase)

  console.log(frase.trim())
  
  let cortado = palabra.slice(0,4)
  console.log(cortado)
  
  function analizarFraseClave(fraseOriginal=""){
    frasenormalizada = fraseOriginal.toLowerCase().trim()

    longitud =  frasenormalizada.length
    indicecentral = longitud / 2
    if (longitud % 2 == 1) {
      caracterdelmedio = frasenormalizada.charAt(indicecentral)
    }else{

      indice = longitud / 2-1
      indice1 = longitud / 2 

      caracterdelmedio = frasenormalizada.charAt(indice) + frasenormalizada.charAt(indice1)


    }


  }
  
  
analizarFraseClave ("hola mundo")  


  //ejercisios 26/05

for (let i = 0; i<=10; i++){

console.log(i)
} 


for (let i = 2; i<=20; i+=2){

console.log(i)
} 

for (let i = 10; i>=0; i--){

console.log(i)
} 



function sumarPrimerosN(n){
let suma = 0

for (let i = 1 ;i<=n; i++ ){
  suma +=i
}
return suma

    
}

console.log(sumarPrimerosN(5))
console.log(sumarPrimerosN(10))
console.log(sumarPrimerosN(1))


let verduras = ["manzana", "banana", "cereza","datil"]

for (let i = 0; i<=3; i++){

console.log(verduras[i])
} 

function factorialConFor (n){
  let valor = 1
for (let i = 1 ;i<=n; i++ ){
  valor *=i
}
return valor


}
console.log(factorialConFor(5))
console.log(factorialConFor(0))
console.log(factorialConFor(1))
console.log(factorialConFor(7))


let registroedad = [15, 38, 52, 27, 16 ,18 , 5, 2 ,25 ]

function encontrarMaximoConFor(registroedad=""){
let mayor = registroedad[0]

for (let i = 0 ; i < registroedad.length; i++) {
  if (registroedad[i] > mayor ) {
    mayor = registroedad[i]
  }
}
return mayor
}

console.log(encontrarMaximoConFor(registroedad))


function revertirStringConfor(texto){
  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }
  return invertido;


}
console.log(revertirStringConfor("hola"))
console.log(revertirStringConfor("javascript"))

function generarFibonacci(n){
  let fibo = []
    if (n >= 1) fibo.push(0);      
    if (n >= 2) fibo.push(1);   

  for(let i = 2  ; i<n ; i++ ){
    let fibo2 = fibo[i - 1] + fibo[i - 2];
    fibo.push(fibo2);
  
  }
 return fibo
}
console.log(generarFibonacci(8));

function dibujarTriangulo(altura) {
    for (let i = 1; i <= altura; i++) {
        let fila = '';
        for (let j = 0; j < i; j++) {
            fila += '*';
        }
        console.log(fila);
    }
}

dibujarTriangulo(5);