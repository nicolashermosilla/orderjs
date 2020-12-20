const data = { pokemon:[ {name: "pokemon B"}, {name: "pokemon A"}, {name: "pokemon C"}]}

//1. Capturar evento de select
const selectElement = document.querySelector('#selectOrder');

selectElement.addEventListener('change', handleSelect);



function handleSelect(event){
   
    //2. Obtener la opcion que se selecciono
    const order = event.target.value ;
    //4. crer html con lista
    document.getElementById("pokemon_list").innerHTML = pokemonList(order);//Aqui se le pasa el parametro de oordenamiento obtenido desde la opcion

}

//3. Realizar el orden segun la opcion seleccionada
function getList(order){

    let items = data.pokemon;

    if(order=="asc")
    {
        items = items.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }

            return 0;
          });
    }

    if(order=="desc")
    {
        items = items.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            
            return 0;
          });
    }

    //Si no entro a ninguno de los if, es porque no se selecciono la opcion y devolvera la lista en el orden original
    return items;

}


function pokemonList(order){
  
    //En vez de obtener la loista desde data.poken, se obtiene da funcion que ordena data.pokemon y se le pasa el parametro de ordenamiento, la primera vez sera "undefined"
     let array = getList(order);
     let list = "";
     for(let i = 0; i < array.length; i++){
               list += `<div class= "cards">
        
               <p><span></span>: ${array[i].name}</p>
              
               
               </div>`
          
       
     }

     return list;
     
}

//La primera vez no se le pasa un orden porque no esta seleccionado
document.getElementById("pokemon_list").innerHTML = pokemonList();



