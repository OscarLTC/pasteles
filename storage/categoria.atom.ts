import { atom } from "recoil";

export const categoriaState = atom<string>({
    key: 'categoriaState', 
    default: '',
});