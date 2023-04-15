import { atom } from "recoil";
import { dataType } from "../constants/constants";

export const dataState = atom<dataType[]>({
  key: 'dataState',
  default: [],
});