// app.js
fetch(' https://pokeapi.co/api/v2/pokemon/charmander') // URL de una API de prueba
  .then(response => {
    // Verificamos si la respuesta fue exitosa (ej. status 200 OK)
    if (!response.ok) {
      // Si no fue exitosa, lanzamos un error para que lo capture el .catch()
      throw new Error('La respuesta de la red no fue OK');
    }
    // Si fue exitosa, parseamos el JSON. Esto devuelve otra promesa.
    return response.json();
  })
  .then(data => {
        document.getElementById('nombre-pokemon').textContent = data.name;
    // ¡Aquí tenemos los datos!
    console.log(data);
    // data es un objeto como: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  })
  .catch(error => {
    // Capturamos cualquier error de red o el que lanzamos manualmente
    console.error('Hubo un problema con la operación fetch:', error);
  });

  fetch(' https://api.chucknorris.io/jokes/random') // URL de una API de prueba
  .then(response => {
    // Verificamos si la respuesta fue exitosa (ej. status 200 OK)
    if (!response.ok) {
      // Si no fue exitosa, lanzamos un error para que lo capture el .catch()
      throw new Error('La respuesta de la red no fue OK');
    }
    // Si fue exitosa, parseamos el JSON. Esto devuelve otra promesa.
    return response.json();
  })
  .then(data => {
        document.getElementById('chiste').textContent = data.value;
    // ¡Aquí tenemos los datos!
    console.log(data);
    // data es un objeto como: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  })
  .catch(error => {
    // Capturamos cualquier error de red o el que lanzamos manualmente
    console.error('Hubo un problema con la operación fetch:', error);
  });

  fetch(' https://restcountries.com/v3.1/name/argentina') // URL de una API de prueba
  .then(response => {
    // Verificamos si la respuesta fue exitosa (ej. status 200 OK)
    if (!response.ok) {
      // Si no fue exitosa, lanzamos un error para que lo capture el .catch()
      throw new Error('La respuesta de la red no fue OK');
    }
    // Si fue exitosa, parseamos el JSON. Esto devuelve otra promesa.
    return response.json();
  })
  .then(data => {
        document.getElementById('info-pais').textContent = data[0].capital;
    // ¡Aquí tenemos los datos!
    console.log(data);
    // data es un objeto como: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  })
  .catch(error => {
    // Capturamos cualquier error de red o el que lanzamos manualmente
    console.error('Hubo un problema con la operación fetch:', error);
  });

  fetch(' https://pokeapi.co/api/v2/pokemon/pikachu') // URL de una API de prueba
  .then(response => {
    // Verificamos si la respuesta fue exitosa (ej. status 200 OK)
    if (!response.ok) {
      // Si no fue exitosa, lanzamos un error para que lo capture el .catch()
      throw new Error('La respuesta de la red no fue OK');
    }
    // Si fue exitosa, parseamos el JSON. Esto devuelve otra promesa.
    return response.json();
  })
  .then(data => {
        let tarjeta = document.getElementById('pokemon-card');
        tarjeta.innerHTML = '';

        let h2 = document.createElement('h2');
        h2.textContent = data.name;
        tarjeta.appendChild(h2);
    
        const img = document.createElement('img');
    img.src = data.sprites.front_default;
    tarjeta.appendChild(img);

    // Agregar tipo
    const pTipo = document.createElement('p');
    pTipo.textContent = 'Tipo: ' + data.types[0].type.name;
    tarjeta.appendChild(pTipo);

    // 2. Segundo fetch: obtener descripción de la habilidad
    const urlHabilidad = data.abilities[0].ability.url;

    fetch(urlHabilidad)
      .then(res => res.json())
      .then(habilidadData => {
        // Buscar descripción en español o inglés
        const efecto = habilidadData.effect_entries.find(e => e.language.name === 'es') 
                    || habilidadData.effect_entries.find(e => e.language.name === 'en');

        const pHabilidad = document.createElement('p');
        pHabilidad.textContent = 'Habilidad: ' + data.abilities[0].ability.name 
          + ' - ' + (efecto ? efecto.effect : 'Sin descripción');
        
        tarjeta.appendChild(pHabilidad);
      });
  
    
    
        // ¡Aquí tenemos los datos!


    console.log(data);
    // data es un objeto como: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  })
  .catch(error => {
    // Capturamos cualquier error de red o el que lanzamos manualmente
    console.error('Hubo un problema con la operación fetch:', error);
  });


  fetch(' https://rickandmortyapi.com/api/character/100') // URL de una API de prueba
  .then(response => {
    // Verificamos si la respuesta fue exitosa (ej. status 200 OK)
    if (!response.ok) {
      // Si no fue exitosa, lanzamos un error para que lo capture el .catch()
      throw new Error('La respuesta de la red no fue OK');
    }
    // Si fue exitosa, parseamos el JSON. Esto devuelve otra promesa.
    return response.json();
  })
  .then(data => {
        let tarjetarick = document.getElementById('rick-morty-card');
        tarjetarick.innerHTML = '';

        let nombre = document.createElement('h2');
        nombre.textContent = data.name;
        

        let Imagen = document.createElement('img');
         Imagen.src = data.image
        Imagen.alt = data.name;

        let especie = document.createElement('p');
        especie.textContent = `Especie: ${data.species}`;

        let origen = document.createElement('p');
         origen.textContent = `Origen: ${data.origin.name}`;

         


   tarjetarick.appendChild(nombre);
   tarjetarick.appendChild(Imagen);
   tarjetarick.appendChild(especie);
   tarjetarick.appendChild(origen);

        
    // ¡Aquí tenemos los datos!
    console.log(data);
    // data es un objeto como: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  })
  .catch(error => {
    // Capturamos cualquier error de red o el que lanzamos manualmente
    console.error('Hubo un problema con la operación fetch:', error);
  });


  async function mostrarPokemon(nombrePokemon) {
    try {
      const respuesta = await fetch( `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
      const datos = await respuesta.json();
    
      let tarjeta = document.getElementById('pokemon-card');
      tarjeta.innerHTML = '';

      let h2 = document.createElement('h2');
      h2.textContent = datos.name;
      tarjeta.appendChild(h2);

      let img = document.createElement('img');
      img.src = datos.sprites.front_default;
      tarjeta.appendChild(img);

      let pTipo = document.createElement('p');
      pTipo.textContent = 'Tipo: ' + datos.types[0].type.name;
      tarjeta.appendChild(pTipo);

      let urlHabilidad = datos.abilities[0].ability.url;

      let resHabilidad = await fetch(urlHabilidad);
      if (!resHabilidad.ok) {
      throw new Error('No se pudo obtener la habilidad');
     }
      let habilidadData = await resHabilidad.json();

    // Buscar descripción en español o inglés
      let efecto = habilidadData.effect_entries.find(e => e.language.name === 'es')
                || habilidadData.effect_entries.find(e => e.language.name === 'en');

        let pHabilidad = document.createElement('p');
        pHabilidad.textContent = 'Habilidad: ' + datos.abilities[0].ability.name
        + ' - ' + (efecto ? efecto.effect : 'Sin descripción');
      tarjeta.appendChild(pHabilidad);

     console.log(datos)



    } catch (error) {
      console.error(error);
    }
   }

   mostrarPokemon('gengar')

async function consultarClima(ciudad) {
  try {
    const resultado = document.getElementById("resultado"); 
    resultado.textContent = `Consultando clima para ${ciudad}...`;

    const clima = await new Promise(resolve =>
      setTimeout(() => resolve({ temperatura: 25, condicion: "Soleado" }), 2000)
    );

    resultado.textContent = `La temperatura en ${ciudad} es de ${clima.temperatura}°C y está ${clima.condicion}.`;
  } catch (error) {
    console.error("Error al consultar el clima:", error);
    document.getElementById("resultado").textContent = "Error al consultar el clima.";
  }
}
function consultarclima() {
  const ciudad = document.getElementById("ciudadInput").value;
  if (ciudad.trim() !== "") {
    consultarClima(ciudad);
  } else {
    document.getElementById("resultado").textContent = "Por favor ingresa una ciudad.";
  }
}


async function mostrarTareas() {
  try {
    const respuesta = await fetch(' https://jsonplaceholder.typicode.com/todos?_limit=10');
    const datos = await respuesta.json();

    let lista = document.getElementById('lista-tareas');
    
    datos.forEach(element => {
      let li = document.createElement('li')
      li.textContent = element.title
      lista.appendChild(li);
    });
   
    
    console.log(datos);
  } catch (error) {
    console.error(error);
  }
}
mostrarTareas();

 async  function cargarGatos(){

  try {
    const respuesta = await fetch('https://api.thecatapi.com/v1/images/search?limit=9');
    const datos = await respuesta.json();

    let lista = document.getElementById('galeria-gatos');
    
    datos.forEach(Gato => {
      let img = document.createElement('img')
      img.src = Gato.url;
      img.alt = 'Gato';
      lista.appendChild(img);
    });
   
    
    console.log(datos);
  } catch (error) {
    console.error(error);
  }



 }

 cargarGatos()