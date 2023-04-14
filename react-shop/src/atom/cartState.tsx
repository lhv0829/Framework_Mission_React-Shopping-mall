import { atom } from "recoil";
import { putCartType } from "../constants/constants";

export const cartState = atom<putCartType[]>({
  key: 'cartState',
  default: [],
});