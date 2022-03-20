import { atom } from "recoil";
import { Canasta } from "./canasta.model";
import { localStorageEffect } from "./effects";

//Duplicate
export const carritoState = atom<Canasta[]>({
    key: 'carritoState', 
    default: [],
    effects: [
        localStorageEffect('carrito'),
      ]
})

