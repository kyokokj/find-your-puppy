import axios from "axios";
import { littersIndex } from "../urls/index";

export const fetchLitters = (dogId) => {
  return axios
    .get(littersIndex(dogId))
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
