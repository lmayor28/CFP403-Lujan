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