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
    
  })
  .catch(error => {
    
    console.error('Hubo un problema con la operación fetch:', error);
  });