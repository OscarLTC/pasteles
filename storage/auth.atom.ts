import { atom } from "recoil";
import { localStorageEffect } from "./effects";

export const userState = atom<any>({
    key: 'userState', 
    default: null,
    effects: [
        localStorageEffect('usuario'),
    ]
});


//Crear una nueva pagina CheckOut 
//Revisar que datos (Forma de pago, recojo, boleta o factura, direccion, )
//Crear estados