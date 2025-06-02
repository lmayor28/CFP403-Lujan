let listadecompras = [ "cerveza" , "fernet" , "cocacola" ]
console.log(listadecompras)
console.log(listadecompras[0])
console.log(listadecompras.length)


let paises = ["españa","Francia","Italia"]
console.log(paises)
paises[1]= "alemania"
console.log(paises)

//agregar elementos

paises.push("elemento1", "elemento2") 
console.log(paises)
console.log(paises.length)
paises.unshift("elemnto1, ", "elemento2")
console.log(paises)
console.log(paises.length)

//eliminar elementos

let letras = ['a', 'b', 'c', 'd']

let ultimaletra = letras.pop()
console.log(ultimaletra)
console.log(letras)

let primeraletra = letras.shift()
console.log(primeraletra)
console.log(letras)

// gestionando invitados

let invitados=["Matias","Rosario"]
invitados.push("Gregorio")
console.log(invitados)
invitados.unshift("Simona")
console.log(invitados)
let ultimoinvitado = invitados.pop()
console.log(invitados)
console.log(ultimoinvitado)

let nombres = ["ana", "luis", "elena"]
nombres.forEach(function(nombre,index,arraycompleto){
    console.log(nombre + " esta en la posicion:  " + index)
    console.log(arraycompleto)
});

//duplicar numeros

let numeros=[1,2,3,4,5]
let duplicados=[]
numeros.forEach(function(num){
    duplicados.push(num * 2)
})
console.log(duplicados)


//obtener subconjunto

 let letra = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(letra.slice(2,5))


//corregir lista

 let listaErronea = [10, 20, "error", 40, 50]
 console.log(listaErronea)
 listaErronea.splice(2,1,30)
 console.log(listaErronea)

 //unir arrays

 let array = invitados.concat(paises)
 console.log(array)

 //index of 

 console.log(array.indexOf("Italia"))
 console.log(array.lastIndexOf("Matias"))

 //includes(elemento buscado)

 let herramientas = ["martillo", "destornillador", "sierra"]
 console.log(herramientas.includes("sierra"))
 console.log(herramientas.includes("taladro"))
 console.log(herramientas.includes("destornillador"))

 //join separador

 let elementos = ['Fuego', 'Aire', 'Agua'];
 console.log(elementos.join())
 console.log(elementos.join(''))
 console.log(elementos.join('-'))

 //map

 let preciosSinIVA = [100, 250, 80, 45]
 let preciosConIVA = preciosSinIVA.map(function(precio){
 return precio * 1.21
 })
 
 console.log(preciosConIVA)

 // filtrar

 let edades = [15, 22, 17, 30, 12, 25]
 let mayoresdeedad = edades.filter(function(edad) {
    return edad >= 18
 })
 
console.log(mayoresdeedad)