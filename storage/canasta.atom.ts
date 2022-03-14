import { atom } from "recoil";

export const carritoState = atom<any[]>({
    key: 'carritoState', 
    default: [],
});

export const categoriaState = atom<string>({
    key: 'categoriaState', 
    default: '',
});