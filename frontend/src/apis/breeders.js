import axios from "axios";
import { breedersIndex } from "../urls/index";

export const fetchBreeders = () => {
  return axios
    .get(breedersIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
