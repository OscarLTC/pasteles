import { selector } from "recoil";
import { buscarState } from "./bucar.atom";
import { categoriaState } from "./categoria.atom";

export const pastelesSelector = selector({
    key: 'pasteles',
    get: async ({get}) => {
      const buscar = get(buscarState)
      const categoria = get(categoriaState)
      
      let pasteles = [];

      if(buscar){
        pasteles = await fetch('http://localhost:3906/api/pasteles/buscar/' + buscar)
            .then((response) => (response.json()))
      }

      else if(categoria == ''){
        pasteles = await fetch('http://localhost:3906/api/pasteles')
      .then((response) => (response.json()))
      }

      else{
        pasteles = await fetch('http://localhost:3906/api/pasteles/categoria/'+categoria)
        .then((response) => (response.json()))
      }
      

      return pasteles;
    },
  });