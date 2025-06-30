 https://pokeapi.co/api/v2/pokemon/charmander.
 fetch('https://pokeapi.co/api/v2/pokemon/charmander') 
  .then(response => {
    
    if (!response.ok) {
      
      throw new Error('La respuesta de la red no fue OK');
    }
    
    return response.json();
  })
  .then(data => {
    
    console.log("Datos recibidos:", data);
    
    let variable=document.getElementById("nombre-pokemon")
    variable.textContent=data.name
    
  
    
    console.log(variable)
  })
  .catch(error => {
    
    console.error('Hubo un problema con la operación fetch:', error);
  });

  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => {
        if(!response.ok){
            throw new Error("La respuesta de la red no fue correcta");
        }  
        return response.json();
    }).then( datos => {
        let chiste = document.getElementById("chiste");
        chiste.textContent = datos.value;
        
        console.log(chiste);
       
    }).catch(Error => {
        console.log("hubo un error en la operacion fetch:" + Error);  
    });


    
fetch("https://restcountries.com/v3.1/name/argentina")
    .then(response => {
        if(!response.ok){
            throw new Error("la respuesta de la red no fue correcta");
        }
        return response.json();
    }).then( datos => {
        let pais = document.getElementById("info-pais");
        pais.textContent = datos[0].capital;
    }).catch( Error => {
        console.log("Hubo un problema con la operacion fetch:" + Error);
    });
    
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        if(!response.ok) {
            throw new Error("La respuesta de la red no fue correcta");
        }
        return response.json();
    }).then(data => {
	      let h2 = document.createElement("H2");
        let imagen = document.createElement("IMG");
        let tipo = document.createElement("P");
        let habilidad = document.getElementById("pokemon-card");
        h2.textContent = data.name
        imagen.setAttribute("src", `${data.sprites.front_default}`);
        tipo.textContent = data.types[0].type.name;
        habilidad.appendChild(h2);
        habilidad.appendChild(imagen);
        habilidad.appendChild(parrafo)
    }).catch( Error  => {
        console.log("hubo un error en la operacion fetch:" + Error);
    });

