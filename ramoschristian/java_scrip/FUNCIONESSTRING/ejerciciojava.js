
let listadecompras=["papel_de_cocina","jabon","shampoo","acondicionador"];
console.log(listadecompras);
console.log(listadecompras[0]);
listadecompras.length;


let invitados=["juan","mateo"];
invitados.push("marcos");
invitados.unshift("juan sebastian");
console.log(invitados);
let eliminados=invitados.pop();
console.log("los invitados son:",invitados,"los eliminados son:", eliminados);


let numeros= [1,2,3,4,5];
numeros.forEach(function(numero,index,numeros2){
    let duplicado= numero *2;
    console.log(duplicado);
})