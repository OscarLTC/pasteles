import { selector } from "recoil";
import { categoriaState } from "./canasta.atom";

export const pastelesSelector = selector({
    key: 'pasteles',
    get: async ({get}) => {
      const filtro = get(categoriaState);
      const pasteles = await fetch('http://localhost:3906/api/pasteles')
      .then((response) => (response.json()))

      return pasteles;
    },
  });