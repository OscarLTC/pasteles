import { atom } from "recoil";

export const buscarState = atom<string>({
    key: 'buscarState', 
    default: '',
});