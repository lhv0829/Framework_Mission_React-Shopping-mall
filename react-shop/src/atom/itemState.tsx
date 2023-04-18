import { atom } from "recoil";
import { dataType } from "../constants/constants";

export const itemState = atom<dataType>({
  key: 'itemState',
  default: undefined,
});