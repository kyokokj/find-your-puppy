import axios from "axios";
import { dogsIndex } from "../urls/index";

export const fetchDogs = (breederId) => {
  return axios
    .get(dogsIndex(breederId))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
